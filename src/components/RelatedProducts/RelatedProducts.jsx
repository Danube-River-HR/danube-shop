import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import ProductCarousel from "./ProductCarousel";
import OutfitCarousel from "./OutfitCarousel";

class RelatedProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductsIds: [],
      relatedProductData: [],
      relatedProductStyles: [],
      currentProduct: [],
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
          this.setState(
            {
              relatedProductData: relatedData
            },
            () => {
              this.getRelatedProductStyles();
            }
          )
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
          data.data.results.forEach(result => {
            if (result["default?"] === 1) {
              relatedStyles.push(result);
              containsDefault = true;
            }
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
  handleOutfitAddClick = e => {
    if (
      this.state.outfit.every(product => {
        return product.data.id !== this.props.overallData.currentProduct.id;
      })
    ) {
      let outfit = [...this.state.outfit];
      outfit.push({
        data: this.props.overallData.currentProduct,
        style: this.props.overallData.productStyles
      });
      this.setState({
        outfit: outfit
      });
      localStorage.setItem("outfit", JSON.stringify(outfit));
    }
  };
  handleOutfitRemoveClick = e => {
    let outfit = this.state.outfit.filter(product => {
      return product.data.id !== e.id;
    });
    this.setState({
      outfit: outfit
    });
    localStorage.setItem("outfit", JSON.stringify(outfit));
  };

  // componentDidUpdate(nextProps) {
  //   if (nextProps.overallData.relatedProducts) {
  //     if (nextProps.relatedProducts !== this.state.relatedProductsIds) {
  //       console.log(nextProps.overallData, "1");
  //       console.log(this.state.relatedProductsIds, "2");
  //       this.getRelatedProductIds(this.props.overallData.relatedProducts);
  //       // this.getRelatedProductIds([1, 2]);
  //     }
  //   }
  // }

  componentWillReceiveProps({ overallData }) {
    this.setState({ overallData }, () => {
      this.getRelatedProductIds(this.state.overallData.relatedProducts);
    });
  }
  componentDidMount() {
    let outfit = JSON.parse(localStorage.getItem("outfit"));
    if (outfit !== null) {
      this.setState({
        outfit: outfit
      });
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
            handleCardClick={this.props.handleCardClick}
          />
        </div>
        <div>
          YOUR OUTFIT
          <OutfitCarousel
            outfit={this.state.outfit}
            handleOutfitAddClick={this.handleOutfitAddClick}
            handleOutfitRemoveClick={this.handleOutfitRemoveClick}
            handleCardClick={this.props.handleCardClick}
          />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    // relatedProducts: state.relatedProducts,
    overallData: state.overallData
  };
}

export default connect(mapStateToProps)(RelatedProducts);
