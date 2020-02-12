import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Select, Button } from 'semantic-ui-react';
import localStorage from 'store';

class SizeAndStock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedSize: null,
            currentProductId: null,
            displayWarning: false
        }
    }

    componentDidMount() {
        // localStorage.clearAll();
        localStorage.set('cart', []);
    }

    componentDidUpdate() {
        // When overallData.currentProduct EXISTS and local state currentProductId is null, set the currentProdId
        if (this.props.overallData.currentProduct !== undefined && this.state.currentProductId === null) {
                this.setState({currentProductId: this.props.overallData.currentProduct.id})
        } else if (this.state.currentProductId !== null) {

            // When overallData.currentProduct CHANGES, RESET the localstate selectedSize and UPDATE currentProdId
            if (this.props.overallData.currentProduct.id !== this.state.currentProductId) {
                this.setState({selectedSize: null, currentProductId: this.props.overallData.currentProduct.id})
            }
        }
    }

    handleSizeSelect = (e) => {
        this.setState({selectedSize: e.target.getElementsByTagName("span")[0].textContent});
    }

    handleQuantitySelect = (e) => {
        if (this.state.selectedSize !== null) {
            this.setState({selectedQuantity: e.target.getElementsByTagName("span")[0].textContent});
        }
    }

    handleAddToCart = () => {
        if (!this.state.selectedQuantity) {
            this.setState({displayWarning: true})
        } else {
            let cart = localStorage.get('cart');

            let newToCart = {
                style: this.props.selectedStyle,
                size: this.state.selectedSize,
                quantity: this.state.selectedQuantity
            };

            localStorage.set('cart', [...cart, newToCart]);
        }
    }

    renderSizeAndQuantityDropdown = () => {
        let selectedStyle = this.props.selectedStyle;
        let sizeToStock;

        if (selectedStyle === null) {
            sizeToStock = {
                "XS": 0,
                "S": 0,
                "M": 0,
                "L": 0,
                "XL": 0
              }
        } else if (selectedStyle.skus.null === null) {
            sizeToStock = {
                "N/A": 0
            }
        } else {
            sizeToStock = selectedStyle.skus;
        }

        // This needs to be an array for Select to work.
        let sizeOptions = Object.entries(sizeToStock).map((size, index) => {
            let option = size[0];

            return ({
                key: index,
                value: size[0],
                text: option
            });

            // if (option === "N/A") {
            //     return ({
            //         key: index,
            //         value: size[0],
            //         text: option
            //     });
            // } else {
            //     if (size[1] !== 0) {
            //         return ({
            //             key: index,
            //             value: size[0],
            //             text: option
            //         });
            //     }
            // }

        });

        // This also needs to be an array for Select to work.
        let quantityOptions = [];
        
        if (this.state.selectedSize === null) {
            quantityOptions.push({key: 0, text: "---"});
        } else {
            if (sizeToStock[this.state.selectedSize] === 0) {quantityOptions.push({key: 0, text: "OUT OF STOCK", value: "N/A"})}
            else {
                let stock = sizeToStock[this.state.selectedSize];
                for (let i = 1; i <= stock; i++) {
                    if (quantityOptions.length < 15) {
                        quantityOptions.push({
                            key: i,
                            text: i,
                            value: i
                        });
                    }
                }
            }
        }

        return (
            <div>
                <Select placeholder="Size" options={sizeOptions} onChange={this.handleSizeSelect}/>
                <Select placeholder="Quantity" options={quantityOptions} onChange={this.handleQuantitySelect} />
            </div>
        )
    }


    render() {
        return (
            <>
                <div className="size-wrapper">
                    {this.renderSizeAndQuantityDropdown()}
                </div>
                <div className="cart-wrapper">
                    {this.state.displayWarning ? <p>Please Pick a Size & Quantity</p> : null}
                    <Button onClick={this.handleAddToCart}>Add To Cart</Button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        overallData: state.overallData,
        selectedStyle: state.selectedStyle
      };
}

export default connect(mapStateToProps)(SizeAndStock);