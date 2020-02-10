import React from 'react';
import {connect} from "react-redux";
import { Rating } from 'semantic-ui-react';

import Styles from './Styles';

class ProductCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let productName;
        let productCategory;
        let productPrice;
        let averageRating;

        if (!this.props.overallData.currentProduct) {
            productName = "Loading";
            productCategory = "Loading";
            productPrice = "Loading";
        } else {
            productName = this.props.overallData.currentProduct.name;
            productCategory = this.props.overallData.currentProduct.category;
            productPrice = this.props.overallData.currentProduct.default_price;
        } 
        
        return (
            <div className="ui card">
                <div className="content">
                    {this.props.overallData.averageRating ? <Rating defaultRating={Math.ceil(this.props.overallData.averageRating)} maxRating={5} disabled /> : "Loading"}
                    <div className="meta"><span className="date">{productCategory}</span></div>
                    <div className="header">{productName}</div>
                    <div className="description">${productPrice}</div>
                </div>
                <div className="content">
                    STYLES GO HERE
                    <Styles />

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        overallData: state.overallData
      };
}

export default connect(mapStateToProps)(ProductCard);