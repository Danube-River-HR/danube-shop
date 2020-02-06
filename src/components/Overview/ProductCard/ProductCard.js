import React from 'react';
import {connect} from "react-redux";
import { Rating } from 'semantic-ui-react';

import Styles from './Styles';

class ProductCard extends React.Component {
    constructor(props) {
        super(props)

    }

    renderRating = () => {
        if (this.props.averageRating !== null) {return (<Rating defaultRating={Math.ceil(this.props.averageRating)} maxRating={5} disabled />)}
    }

    render() {
        const productName = this.props.currentProduct.name;
        const productCategory = this.props.currentProduct.category;
        const productPrice = this.props.currentProduct.default_price;
        
        return (
            <div className="ui card">
                <div className="content">
                    {this.renderRating()}
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
    console.log('PRODUCT CARD STATE:', state);
    return {
        currentProduct: state.currentProduct,
        averageRating: state.averageRating,
        productStyles: state.productStyles
      };
}

export default connect(mapStateToProps)(ProductCard);