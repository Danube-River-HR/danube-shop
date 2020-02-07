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
      count: 2
    };
  }

  incrementCount = () => {
    this.setState({ count: (this.state.count += 2) });
  };

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

  getReviews = () => {
    axios
      .get(
        `http://3.134.102.30/reviews/${this.props.productData.id}/list?count=10000`
      )
      .then(response => this.setState({ mainData: response.data }));
  };
  /*******************************************************************************************/

  componentDidMount() {
    this.getReviews(this.state.count);
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
            />
          </div>
        )}
      </div>
    );
  }
}

export default RatingsAndReviews;
