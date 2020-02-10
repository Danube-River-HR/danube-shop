import React from "react";
import Ratings from "./Ratings";
import Reviews from "./Reviews";
import axios from "axios";
import spinner from "./spinner.gif";

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainData: {},
      count: 2,
      sorting: "helpful",
      markedHelpful: {}
    };
  }
  // **************************************************************************************************
  incrementCount = () => {
    this.setState({ count: (this.state.count += 2) });
  };

  changeSorting = (e, data) => {
    this.getReviews(data.value, 2);
    this.setState({ count: 2 });
  };

  reportReview = id => {
    axios
      .put(`http://3.134.102.30/reviews/report/${id}`)
      .then(response => this.getReviews());
  };

  markReviewHelpful = id => {
    if (this.state.markedHelpful[id] !== 1) {
      this.state.markedHelpful[id] = 1;
      axios
        .put(`http://3.134.102.30/reviews/helpful/${id}`)
        .then(response => this.getReviews());
    }
  };

  getReviews = (sort = this.state.sorting, count = this.state.count) => {
    axios
      .get(
        `http://3.134.102.30/reviews/${this.props.productData.id}/list?count=10000&sort=${sort}`
      )
      .then(response =>
        this.setState({ mainData: response.data, sorting: sort, count: count })
      );
    // .then(() => console.log(this.state.sorting));
  };
  /*******************************************************************************************/

  componentDidMount() {
    this.getReviews(this.state.sorting);
  }

  /*******************************************************************************************/
  render() {
    return (
      <div>
        {Object.entries(this.state.mainData).length === 0 ? (
          <div>
            <img src={spinner} />
          </div>
        ) : (
          <div
            style={{ borderStyle: "solid", borderColor: "blue" }}
            className="ratingsAndReviews"
          >
            <Ratings />
            <Reviews
              productName={this.props.productData.name}
              data={this.state.mainData}
              count={this.state.count}
              addTwo={this.incrementCount}
              markHelpful={this.markReviewHelpful}
              reportReview={this.reportReview}
              changeDropdown={this.changeSorting}
            />
          </div>
        )}
      </div>
    );
  }
}

export default RatingsAndReviews;
