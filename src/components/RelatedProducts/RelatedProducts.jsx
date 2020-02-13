import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import ProductCarousel from "./ProductCarousel";
import OutfitCarousel from "./OutfitCarousel";

//John's Edits
import { Header } from "semantic-ui-react";

class RelatedProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductsIds: [],
      relatedProductData: [],
      relatedProductStyles: [],
      relatedProductReviews: [],
      currentProduct: [],
      outfit: [],
      overallData: {}
    };
  }
  getRelatedProductData = () => {
    let relatedData = [];
    let relatedStyles = [];
    let relatedReviews = [];
    this.state.relatedProductsIds.map(productId => {
      let one = `http://3.134.102.30/products/${productId}`;
      let two = `http://3.134.102.30/products/${productId}/styles`;
      let three = `http://3.134.102.30/reviews/${productId}/meta`;
      const requestOne = axios.get(one);
      const requestTwo = axios.get(two);
      const requestThree = axios.get(three);
      return axios
        .all([requestOne, requestTwo, requestThree])
        .then(
          axios.spread((...data) => {
            const responseOne = data[0];
            const responseTwo = data[1];
            const responseThree = data[2];
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
            const ratings = Object.entries(responseThree.data.ratings);
            let count = 0;
            let ratingCount = 0;
            ratings.forEach(review => {
              count += review[0] * review[1];
              ratingCount += review[1];
            });
            relatedReviews.push((count / ratingCount).toFixed(2))
            console.log(relatedReviews,'reviews')
            return data;
          })
        )
        .then(() =>
          this.setState({
            relatedProductData: relatedData,
            relatedProductStyles: relatedStyles,
            relatedProductReviews: relatedReviews
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
        style: this.props.overallData.productStyles,
        rating: this.props.overallData.averageRating
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
      let uniqueIds = [];
      for (var value of this.props.overallData.relatedProducts) {
        if (uniqueIds.indexOf(value) === -1) {
          uniqueIds.push(value);
        }
      }
      this.setState(
        {
          relatedProductsIds: uniqueIds,
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
          <Header className="ui large header related-product-header">
            Related Products
          </Header>
          <ProductCarousel
            ids={this.state.relatedProductsIds}
            data={this.state.relatedProductData}
            currentProduct={this.state.currentProduct}
            styles={this.state.relatedProductStyles}
            handleCardClick={this.props.handleCardClick}
            handleModalClick={this.handleModalClick}
            reviews={this.state.relatedProductReviews}
          />
        </div>
        <div>
          <Header className="ui large header related-product-header">
            Your Outfit
          </Header>
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
