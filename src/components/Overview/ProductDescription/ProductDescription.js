import React from 'react';
import {connect} from "react-redux";
import SocialMedia from './SocialMedia';

const ProductDescription = ({overallData}) => {
    const renderDescription = () => {
        if (!overallData.currentProduct) {return "Loading"}
        else {return overallData.currentProduct.description}
    }

    const renderSlogan = () => {
        if (!overallData.currentProduct) {return "Loading"}
        else {return overallData.currentProduct.slogan}
    }

    return (
        <div className="ui items">
            <div className="item">
                <div className="content">
                    <h4 className="header">{renderSlogan()}</h4>
                    <div className="description">
                        <p>{renderDescription()}</p>
                    </div>
                    <h5 className="header">Features</h5>
                    <div>
                        
                    </div>
                </div>
            </div>
            <div className="social-media-container">
                <SocialMedia />
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