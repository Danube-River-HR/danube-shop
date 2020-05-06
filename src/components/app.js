/* ----- Dependencies ----- */
import React from "react";
import { Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
/* ----- Actions ----- */
import { fetchAllProductData } from "../redux/actions";
/* ----- Components ----- */
import Overview from "./Overview/Overview.js";
import RatingsAndReviews from "./RatingsAndReviews/RatingsAndReviews";

class App extends React.Component {
  constructor() {
    super();
  }

  updateProduct = (id) => {
    this.props.fetchAllProductData(id);
  };

  componentDidMount() {
    this.updateProduct(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (Object.entries(prevProps.overallData).length > 0 && this.props) {
      if (
        prevProps.overallData.currentProduct.id.toString() !==
        this.props.match.params.id
      ) {
        this.updateProduct(this.props.match.params.id);
      }
    }
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <>
        <Header size="huge">Danube</Header>

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
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    overallData: state.overallData,
  };
}

export default withRouter(
  connect(mapStateToProps, {
    fetchAllProductData,
  })(App)
);
