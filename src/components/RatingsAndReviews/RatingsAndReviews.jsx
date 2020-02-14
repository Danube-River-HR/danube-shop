import React from "react";
import Ratings from "./Ratings/Ratings";
import Reviews from "./Reviews";
import axios from "axios";


class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainData: {},
      count: 2,
      sorting: "helpful",
      markedHelpful: {},
      currentStarFilter: []
    };
  }
  // **************************************************************************************************
  incrementCount = () => {
    let count = this.state.count + 2;
    this.setState({ count: count });
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

  changeStarFilter = star => {
    let arr = this.state.currentStarFilter;

    if (this.state.currentStarFilter.indexOf(star) === -1) {
      arr.push(star);
      this.setState({ currentStarFilter: arr });
    } else {
      arr.splice(this.state.currentStarFilter.indexOf(star), 1);
      this.setState({ currentStarFilter: arr });
    }
  };

  getReviews = (sort = this.state.sorting, count = this.state.count) => {
    axios
      .get(
        `http://3.134.102.30/reviews/${this.props.productData.id}/list?count=10000&sort=${sort}`
      )
      .then(response => {
        axios
          .get(`http://3.134.102.30/reviews/${this.props.productData.id}/meta`)
          .then(response2 => {
            this.setState({
              mainData: response.data,
              sorting: sort,
              count: count,
              metaData: response2.data,
              currentStarFilter: []
            });
          });
      });
  };
  /*******************************************************************************************/

  componentDidMount() {
    this.getReviews(this.state.sorting);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.productData.id !== this.props.productData.id) {
      let sort = this.state.sorting;
      let count = 2;
      axios
        .get(
          `http://3.134.102.30/reviews/${this.props.productData.id}/list?count=10000&sort=${sort}`
        )
        .then(response => {
          axios
            .get(
              `http://3.134.102.30/reviews/${this.props.productData.id}/meta`
            )
            .then(response2 => {
              this.setState({
                mainData: response.data,
                sorting: sort,
                count: 2,
                metaData: response2.data,
                currentStarFilter: []
              });
            });
        });
    }
  }

  /*******************************************************************************************/
  render() {
    return (
      <div>
        <div>
          <div className="ratingsAndReviewsName" id="main-product-rating">
            Ratings & Reviews
          </div>
        </div>
        {Object.entries(this.state.mainData).length === 0 ? null : (
          <div className="ratingsAndReviews">
            <Ratings
              avg={this.props.avgRating}
              metaData={this.state.metaData}
              changeStarFilter={this.changeStarFilter}
              currentStarFilter={this.state.currentStarFilter}
            />
            <Reviews
              productName={this.props.productData.name}
              data={this.state.mainData}
              count={this.state.count}
              addTwo={this.incrementCount}
              markHelpful={this.markReviewHelpful}
              reportReview={this.reportReview}
              changeDropdown={this.changeSorting}
              metaData={this.state.metaData}
              currentStarFilter={this.state.currentStarFilter}
            />
          </div>
        )}
      </div>
    );
  }
}

export default RatingsAndReviews;


