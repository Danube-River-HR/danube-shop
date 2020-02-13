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
      outfit: [],
      overallData: {}
    };
  }
  getRelatedProductData = () => {
    let relatedData = [];
    let relatedStyles = [];
    this.state.relatedProductsIds.map(productId => {
      let one = `http://3.134.102.30/products/${productId}`;
      let two = `http://3.134.102.30/products/${productId}/styles`;
      const requestOne = axios.get(one);
      const requestTwo = axios.get(two);
      return axios
        .all([requestOne, requestTwo])
        .then(
          axios.spread((...data) => {
            const responseOne = data[0];
            const responseTwo = data[1];
            relatedData.push(responseOne.data);
            let containsDefault = false;
            responseTwo.data.results.forEach(result => {
              if (result["default?"] === 1) {
                relatedStyles.push(result);
                containsDefault = true;
              }
            });
            if (!containsDefault) {
              relatedStyles.push(responseTwo.data.results[0]);
            }
            return data;
          })
        )
        .then(() =>
          this.setState({
            relatedProductData: relatedData,
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

  componentDidUpdate(prevProps) {
    if (
      prevProps.overallData.relatedProducts !==
      this.props.overallData.relatedProducts
    ) {
      this.setState(
        {
          relatedProductsIds: this.props.overallData.relatedProducts,
          currentProduct: this.props.productData
        },
        () => {
          this.getRelatedProductData();
        }
      );
    }
  }
  componentDidMount() {
    // this.setState({ currentProduct: this.props.productData });
    let outfit = JSON.parse(localStorage.getItem("outfit"));
    if (outfit !== null) {
      this.setState({
        outfit: outfit
      });
    }
  }

  render() {
    return (
      <div class="relatedProductContainer">
        <div>
          RELATED PRODUCTS
          <ProductCarousel
            ids={this.state.relatedProductsIds}
            data={this.state.relatedProductData}
            currentProduct={this.state.currentProduct}
            styles={this.state.relatedProductStyles}
            handleCardClick={this.props.handleCardClick}
            handleModalClick={this.handleModalClick}
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
    overallData: state.overallData
  };
}

export default connect(mapStateToProps)(RelatedProducts);
