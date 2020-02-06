import React from 'react';
import {connect} from "react-redux";

const ProductDescription = ({description, features}) => {
    // console.log('PROD DESC PROPS:', description)
    // console.log('PROD DESC PROPS:', features)
    return (
        <div className="ui items">
            <div className="item">
                <div className="content">
                    <h4 className="header">Product Description</h4>
                    <div className="description">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        description: state.currentProduct.description,
        features: state.currentProduct.features
    }
}

export default connect(mapStateToProps)(ProductDescription);