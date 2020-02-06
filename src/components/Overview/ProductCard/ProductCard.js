import React from 'react';
import {connect} from "react-redux";

class ProductCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div class="ui card">
                
                <div class="content">
                    <div class="header">Matthew</div>
                    <div class="meta"><span class="date">Joined in 2015</span></div>
                    <div class="description">Matthew is a musician living in Nashville.</div>
                </div>
                <div class="extra content">
                    <a>
                    <i aria-hidden="true" class="user icon"></i>
                    22 Friends
                    </a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('PRODUCT CARD STATE:', state);
    return {
        currentProduct: state.currentProduct,
        averageRating: state.averageRating,
        relatedProducts: state.relatedProducts,
        productStyles: state.productStyles,
        currentProductEntries: Object.entries(state.currentProduct)
      };
}

export default connect(mapStateToProps)(ProductCard);