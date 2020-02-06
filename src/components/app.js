/* ----- DEPENDENCIES ----- */
import React from "react";
import {Header} from 'semantic-ui-react';
import {connect} from "react-redux";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import RelatedProducts from "./RelatedProducts/RelatedProducts"

/* ----- COMPONENTS ----- */
import {getProductData, getRelatedProducts, getAverageRating, getProductStyles} from "../redux/actions";
import Overview from './Overview/Overview.js'

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
          <h2>RELATED ITEMS COMPONENT(Replace)</h2>
          <RelatedProducts />
          <h3>RATING AND REVIEWS COMPONENT(Replace)</h3>
        </Router>
      </>
    );
  }
}

function mapStateToProps(state) {
  console.log('THE STATE:', state);
  return {
    currentProduct: state.currentProduct,
    averageRating: state.averageRating,
    relatedProducts: state.relatedProducts,
    currentProductEntries: Object.entries(state.currentProduct)
  };
}

export default connect(mapStateToProps, {getProductData, getRelatedProducts, getProductStyles, getAverageRating})(App)
