import React from 'react';
import {connect} from "react-redux";
import TextAccordion from './TextAccordion';

const ProductDescription = ({overallData}) => {
    const renderDescription = () => {
        if (!overallData.currentProduct) {return "Loading"}
        else {return overallData.currentProduct.description}
    }

    const renderSlogan = () => {
        if (!overallData.currentProduct) {return "Loading"}
        else {return overallData.currentProduct.slogan}
    }

    const renderFeatures = () => {
        if (!overallData.currentProduct) {return "Loading"}
        else {
            let features = overallData.currentProduct.features;
            let featuresText = '';
            features.forEach(feature => {
                featuresText += `- ${feature.feature}: ${feature.value}\n`
            })
            return featuresText;
        }
    }

    return (
        <>
            <div className="product-slogan">
                <h4>{renderSlogan()}</h4>
            </div>
            <TextAccordion title="DESCRIPTION" text={renderDescription()}/>
            <TextAccordion title="FEATURES" text={renderFeatures()}/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        overallData: state.overallData
    }
}

export default connect(mapStateToProps)(ProductDescription);