/* ----- DEPENDENCIES ----- */
import React from "react";
import { Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

/* ----- ACTIONS ----- */

import { fetchAllProductData } from "../redux/actions";

/* ----- COMPONENTS ----- */

import Overview from "./Overview/Overview.js";
import RatingsAndReviews from "./RatingsAndReviews/RatingsAndReviews";

/***************************************************************************/

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentProductId: 1
    };
  }

  handleCardClick = e => {
    this.setState(
      {
        currentProductId: e
      },
      () => {
        this.updateProduct(e);
      }
    );
  };

  updateProduct = id => {
    this.props.fetchAllProductData(this.state.currentProductId);
  };

  componentDidMount() {
    this.updateProduct(this.state.currentProductId);
  }

  render() {
    return (
      <>
        <Header size="huge">Danube</Header>

        <Router>
          <Overview />

          <RelatedProducts
            productData={this.props.overallData.currentProduct}
            productStyle={this.props.overallData.productStyles}
            handleCardClick={this.handleCardClick}
          />

          {Object.entries(this.props.overallData).length === 0 ? (
            <div>LOADING</div>
          ) : (
            <RatingsAndReviews
              productData={this.props.overallData.currentProduct}
              avgRating={this.props.overallData.averageRating}
            />
          )}
        </Router>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    overallData: state.overallData
  };
}

export default connect(mapStateToProps, {
  fetchAllProductData
})(App);
