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
      sorting: "helpful"
    };
  }
  // **************************************************************************************************
  incrementCount = () => {
    this.setState({ count: (this.state.count += 2) });
  };

  changeSorting = (e, data) => {
    // console.log(data.value);
    this.getReviews(data.value);
  };
  // this.setState({ sorting: data.value }
  reportReview = id => {
    axios
      .put(`http://3.134.102.30/reviews/report/${id}`)
      .then(response => this.getReviews());
  };

  markReviewHelpful = id => {
    axios
      .put(`http://3.134.102.30/reviews/helpful/${id}`)
      .then(response => this.getReviews());
  };

  getReviews = (sort = this.state.sorting) => {
    // console.log(sort);
    // let count = this.state.count;
    // console.log(count);
    // if (sort === null) {
    //   sort = this.state.sorting;
    //   count = 2;
    // }
    axios
      .get(
        `http://3.134.102.30/reviews/${this.props.productData.id}/list?count=10000&sort=${sort}`
      )
      .then(response =>
        this.setState({ mainData: response.data, sorting: sort })
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
