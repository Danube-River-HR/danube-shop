/* ----- DEPENDENCIES ----- */
import React from "react";
import { Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

/* ----- ACTIONS ----- */

import {
  getProductData,
  getRelatedProducts,
  getAverageRating,
  getProductStyles
} from "../redux/actions";

/* ----- COMPONENTS ----- */

import Overview from "./Overview/Overview.js";
import RatingsAndReviews from "./RatingsAndReviews/RatingsAndReviews";

/***************************************************************************/

class App extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getProductData(1);
    this.props.getAverageRating(1);
    this.props.getRelatedProducts(1);
    this.props.getProductStyles(1);
  }

  render() {
    return (
      <>
        <Header size="huge">Danube</Header>

        <Router>
          <Overview />
          <RelatedProducts />
          {Object.entries(this.props.currentProduct).length === 0 ? (
            <div>LOADING</div>
          ) : (
            <RatingsAndReviews productData={this.props.currentProduct} />
          )}
        </Router>
      </>
    );
  }
}

function mapStateToProps(state) {
  console.log("THE STATE:", state);
  return {
    currentProduct: state.currentProduct,
    averageRating: state.averageRating,
    relatedProducts: state.relatedProducts,
    currentProductEntries: Object.entries(state.currentProduct)
  };
}

export default connect(mapStateToProps, {
  getProductData,
  getRelatedProducts,
  getProductStyles,
  getAverageRating
})(App);
