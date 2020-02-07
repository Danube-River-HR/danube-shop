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
    this.state = {
      currentProductId: 1
    };
  }

  handleCardClick = e => {
    this.setState({
      currentProductId: e
    }, () => {
      this.updateProduct(e)
    });
  };

  updateProduct = id => {
    this.props.getProductData(id);
    this.props.getAverageRating(id);
    this.props.getRelatedProducts(id);
    this.props.getProductStyles(id);
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
            productData={this.props.currentProduct}
            productStyle={this.props.productStyles}
            handleCardClick={this.handleCardClick}
          />
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
  // console.log("THE STATE:", state);
  return {
    currentProduct: state.currentProduct,
    averageRating: state.averageRating,
    relatedProducts: state.relatedProducts,
    currentProductEntries: Object.entries(state.currentProduct),
    productStyles: state.productStyles
  };
}

export default connect(mapStateToProps, {
  getProductData,
  getRelatedProducts,
  getProductStyles,
  getAverageRating
})(App);
