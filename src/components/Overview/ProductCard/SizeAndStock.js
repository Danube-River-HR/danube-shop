import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Select } from 'semantic-ui-react';

class SizeAndStock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedSize: null
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

    render() {
        console.log('SIZE AND STOCK LOCAL STATE DATA:', this.state);

        let selectedItem = this.props.productStyles.results.filter(style => {
            return style.style_id === this.props.selectedStyleId;
        });
        // console.log('SELECTED ITEM:', selectedItem);
        let sizeToStock;

        if (selectedItem === undefined) {
          
            sizeToStock = {
              "XS": 0,
              "S": 0,
              "M": 0,
              "L": 0,
              "XL": 0
            }
            
            
          }

          // if (selectedItem) {
          //   console.log('hey', selectedItem)
          //   if (selectedItem[0].skus === null) {
          //     sizeToStock = {
          //       "XS": 0,
          //       "S": 0,
          //       "M": 0,
          //       "L": 0,
          //       "XL": 0
          //     }
          //   } else {
          //     sizeToStock = selectedItem[0].skus; // the 0 index is bc .filter returns an array of your filtered item.

          //   }

          // }
          if (selectedItem) {
            console.log('hey', selectedItem)
            if (selectedItem.length === 0) {
              sizeToStock = {
                "XS": 0,
                "S": 0,
                "M": 0,
                "L": 0,
                "XL": 0
              }
            } else {
              sizeToStock = selectedItem[0].skus; // the 0 index is bc .filter returns an array of your filtered item.

            }

          }
        

        let sizeOptions = Object.entries(sizeToStock).map((size, index) => {
            let option;
            if (size[1] === 0) {option = `${size[0]} - Out of stock`}
            else {option = size[0]}

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
            if (sizeToStock[this.state.selectedSize] === 0) {quantityOptions.push({key: 0, text: "Not Available"})}
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
            <>
                <div className="size-wrapper">
                    <Select placeholder="Size" options={sizeOptions} onChange={this.handleSizeSelect} simple item/>
                    <Select placeholder="Quantity" options={quantityOptions} onChange={this.handleQuantitySelect} simple item />
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
        productStyles: state.productStyles
      };
}

export default connect(mapStateToProps)(SizeAndStock);
