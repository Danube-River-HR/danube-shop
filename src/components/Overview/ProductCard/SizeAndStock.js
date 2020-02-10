import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Select } from 'semantic-ui-react';

class SizeAndStock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedSize: null,
            currentProductId: null,
            sizePlaceholder: "Size",
            quantityPlaceholder: "Quantity"
        }
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

        let sizeOptions = Object.entries(sizeToStock).map((size, index) => {
            let option = size[0];

            return ({
                key: index,
                value: size[0],
                text: option
            });
        });

        let quantityOptions = [];
        
        if (this.state.selectedSize === null) {
            quantityOptions.push({key: 0, text: "---"});
        } else {
            if (sizeToStock[this.state.selectedSize] === 0) {quantityOptions.push({key: 0, text: "N/A", value: "N/A"})}
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
                <Select placeholder={this.state.sizePlaceholder} options={sizeOptions} onChange={this.handleSizeSelect}/>
                <Select placeholder={this.state.quantityPlaceholder} options={quantityOptions} onChange={this.handleQuantitySelect} />
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

                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('SIZE AND STOCK STATE:', state);
    return {
        overallData: state.overallData,
        selectedStyle: state.selectedStyle
      };
}

export default connect(mapStateToProps)(SizeAndStock);