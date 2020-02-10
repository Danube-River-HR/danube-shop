import React, { Component } from 'react';
import {connect} from 'react-redux';

// import {fetchAllProductData} from "../../../redux/actions/index";

class ProductGallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
        }
    }

    componentDidMount() {
        // fetchAllProductData(1);
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
    // console.log('PRODUCT GALLERY STATE:', state);
    return {
        // currentProduct: state.currentProduct,
        // productStyles: state.productStyles,
        // overallData: state.overallData
      };
}

export default connect(mapStateToProps)(ProductGallery);