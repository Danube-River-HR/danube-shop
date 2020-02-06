import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    relatedProducts: state.relatedProducts,
    productId: state.currentProduct.id
  };
}

class RelatedProducts extends Component {
  render() {
    return (
      <div>
        {/* {this.props.relatedProducts} */}
        {this.props.productId}
      </div>
    );
  }
}

export default connect(mapStateToProps)(RelatedProducts);
