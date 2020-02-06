import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import ProductCarousel from "./ProductCarousel";
import OutfitCarousel from "./OutfitCarousel"

function mapStateToProps(state) {
  return {
    relatedProducts: state.relatedProducts
  };
}

class RelatedProducts extends Component {
  constructor() {
    super();
    this.state = {
      relatedProductsIds: [],
      relatedProductData: [],
      relatedProductStyles: [],
      outfit: []
    };
  }

  getRelatedProductIds = relatedProductIds => {
    this.setState(
      {
        relatedProductsIds: relatedProductIds
      },
      () => {
        this.getRelatedProductData();
        this.getRelatedProductStyles();
      }
    );
  };

  getRelatedProductData = () => {
    let relatedData = [];
    this.state.relatedProductsIds.map(productId => {
      return axios
        .get(`http://3.134.102.30/products/${productId}`)
        .then(data => {
          relatedData.push(data.data);
        })
        .then(() =>
          this.setState({
            relatedProductData: relatedData
          })
        );
    });
  };
  getRelatedProductStyles = () => {
    let relatedStyles = [];
    this.state.relatedProductsIds.map(productId => {
      return axios
        .get(`http://3.134.102.30/products/${productId}/styles`)
        .then(data => {
          let containsDefault = false;
          data.data.results.map(result => {
            if (result["default?"] === 1) {
              relatedStyles.push(result);
              containsDefault = true;
            }
            return;
          });
          if (!containsDefault) {
            relatedStyles.push(data.data.results[0]);
          }
          return data;
        })
        .then(() =>
          this.setState({
            relatedProductStyles: relatedStyles
          })
        );
    });
  };
  handleClick = (props, e) => {
    let outfit = [...this.state.outfit];
    outfit.push(props);
    this.setState(
      {
        outfit: outfit
      },
      () => {
        console.log(this.state.outfit);
      }
    );
  };

  componentDidUpdate(nextProps) {
    if (nextProps.relatedProducts !== this.state.relatedProductsIds) {
      this.getRelatedProductIds(this.props.relatedProducts);
    }
  }
  render() {
    return (
      <div>
        <div>
          RELATED PRODUCTS
          <ProductCarousel
            ids={this.state.relatedProductsIds}
            data={this.state.relatedProductData}
            styles={this.state.relatedProductStyles}
            handleClick={this.handleClick}
          />
        </div>
        <div>
          YOUR OUTFIT
          <OutfitCarousel
            outfit={this.state.outfit}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(RelatedProducts);
