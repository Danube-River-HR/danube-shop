import React, { Component } from 'react';
import {connect} from 'react-redux';

class ProductGallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="gallery-container">
                PRODUCT GALLERY FASHO
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('PRODUCT GALLERY STATE:', state);
    return {
        currentProduct: state.currentProduct,
        productStyles: state.productStyles
      };
}

export default connect(mapStateToProps)(ProductGallery);