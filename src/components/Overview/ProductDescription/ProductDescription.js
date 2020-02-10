import React from 'react';
import {connect} from "react-redux";

const ProductDescription = ({overallData}) => {
    const renderDescription = () => {
        if (!overallData.productData) {return "Loading"}
        else {return overallData.productData.description}
    }

    return (
        <div className="ui items">
            <div className="item">
                <div className="content">
                    <h4 className="header">Product Description</h4>
                    <div className="description">
                        <p>{renderDescription()}</p>
                    </div>
                    <h5 className="header">Features</h5>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        overallData: state.overallData
    }
}

export default connect(mapStateToProps)(ProductDescription);