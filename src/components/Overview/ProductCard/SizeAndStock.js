import React, { Component } from "react";
import { connect } from "react-redux";
import { Select, Button, Icon } from "semantic-ui-react";
import axios from "axios";

class SizeAndStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSize: null,
      currentProductId: null,
      displayWarning: false,
      inCart: [],
      buttonText: "Add to Cart",
      selectedQuantity: null,
    };
  }

  componentDidMount() {
    this.fetchCart();
  }

  componentDidUpdate() {
    // When overallData.currentProduct EXISTS and local state currentProductId is null, set the currentProdId
    if (
      this.props.overallData.currentProduct !== undefined &&
      this.state.currentProductId === null
    ) {
      this.setState({
        currentProductId: this.props.overallData.currentProduct.id,
      });
    } else if (this.state.currentProductId !== null) {
      // When overallData.currentProduct CHANGES, RESET the localstate selectedSize and UPDATE currentProdId
      if (
        this.props.overallData.currentProduct.id !== this.state.currentProductId
      ) {
        this.setState({
          selectedSize: null,
          currentProductId: this.props.overallData.currentProduct.id,
          buttonText: "Add to Cart",
        });
      }
    }
  }

  fetchCart = () => {
    let url = `http://3.134.102.30/cart/1234`;
    axios.get(url).then((response) => {
      this.setState({ inCart: response.data });
    });
  };

  handleSizeSelect = (e) => {
    this.setState({
      selectedSize: e.target.getElementsByTagName("span")[0].textContent,
      selectedQuantity: 1,
    });
  };

  handleQuantitySelect = (e) => {
    if (this.state.selectedSize !== null) {
      this.setState({
        selectedQuantity: e.target.getElementsByTagName("span")[0].textContent,
      });
    }
  };

  handleAddToCart = () => {
    if (!this.state.selectedQuantity) {
      this.setState({ displayWarning: true });
    } else {
      let sku_idObj = {
        XS: 0,
        S: 1,
        M: 2,
        L: 3,
        XL: 4,
        XXL: 5,
      };
      let url = `http://3.134.102.30/cart/`;
      axios
        .post(url, {
          user_token: 1234,
          sku_id: sku_idObj[this.state.selectedSize],
        })
        .then((response) => {
          this.fetchCart();
          this.setState({ buttonText: "Added to Cart!" });
        })
        .catch((err) => {
          console.log("Error adding to cart:", err);
        });
    }
  };

  renderSizeAndQuantityDropdown = () => {
    let selectedStyle = this.props.selectedStyle;
    let sizeToStock;

    if (selectedStyle === null) {
      sizeToStock = {
        XS: 0,
        S: 0,
        M: 0,
        L: 0,
        XL: 0,
      };
    } else if (selectedStyle.skus.null === null) {
      sizeToStock = {
        "N/A": 5,
      };
    } else {
      sizeToStock = selectedStyle.skus;
    }

    // This needs to be an array for Select to work.
    let sizeOptions = Object.entries(sizeToStock).map((size, index) => {
      let option = size[0];
      return {
        key: index,
        value: size[0],
        text: option,
      };
    });

    // This also needs to be an array for Select to work.
    let quantityOptions = [];

    if (this.state.selectedSize === null) {
      quantityOptions.push({ key: 0, text: "---" });
    } else {
      if (sizeToStock[this.state.selectedSize] === 0) {
        quantityOptions.push({ key: 0, text: "OUT OF STOCK", value: "N/A" });
      } else {
        let stock = sizeToStock[this.state.selectedSize];
        for (let i = 1; i <= stock; i++) {
          if (quantityOptions.length < 15) {
            quantityOptions.push({
              key: i,
              text: i,
              value: i,
            });
          }
        }
      }
    }

    return (
      <div>
        <Select
          placeholder="Size"
          options={sizeOptions}
          onChange={this.handleSizeSelect}
        />
        <Select
          placeholder={
            this.state.selectedQuantity
              ? this.state.selectedQuantity
              : "Quantity"
          }
          options={quantityOptions}
          onChange={this.handleQuantitySelect}
        />
      </div>
    );
  };

  render() {
    return (
      <>
        <div className="size-wrapper">
          {this.renderSizeAndQuantityDropdown()}
        </div>
        <div className="cart-wrapper">
          <Button onClick={this.handleAddToCart} className="cart-button">
            {this.state.buttonText}
          </Button>
          <Button icon className="cart-button">
            <Icon name="star outline" />
          </Button>
        </div>
        <div className="cart-warning">
          {this.state.displayWarning ? (
            <p style={{ color: "red" }}>Please Pick a Size & Quantity</p>
          ) : null}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    overallData: state.overallData,
    selectedStyle: state.selectedStyle,
  };
};

export default connect(mapStateToProps)(SizeAndStock);
