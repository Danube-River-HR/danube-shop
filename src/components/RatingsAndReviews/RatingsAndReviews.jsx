import React from "react";
import Ratings from "./Ratings";
import Reviews from "./Reviews";
import axios from "axios";
import spinner from "./spinner.gif";

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mainData: {} };
  }

  componentDidMount() {
    axios
      .get(`http://3.134.102.30/reviews/${this.props.productData.id}/list`)
      .then(response => this.setState({ mainData: response.data }));
  }
  render() {
    return (
      <div>
        {Object.entries(this.state.mainData).length === 0 ? (
          <div>
            <img src={spinner} />
          </div>
        ) : (
          <div style={{ borderStyle: "solid", borderColor: "blue" }}>
            <Ratings />
            <Reviews data={this.state.mainData} />
          </div>
        )}
      </div>
    );
  }
}

export default RatingsAndReviews;
