import React from 'react';
import {connect} from "react-redux";
import { Rating } from 'semantic-ui-react';

import Styles from './Styles';
import SizeAndStock from './SizeAndStock';

class ProductCard extends React.Component {
    constructor(props) {
        super(props)
    }

    renderPrice = () => {
        if (!this.props.selectedStyle) {
            return <div className="description">Loading</div>
        } else {
            if (this.props.selectedStyle.sale_price === "0") {
                let productPrice = Number(this.props.selectedStyle.original_price).toFixed(2);
                return <div className="description">${productPrice}</div>
            } else {
                let original = <del>{Number(this.props.selectedStyle.original_price).toFixed(2)}</del>
                let sale = <ins style={{color:"red"}}>{Number(this.props.selectedStyle.sale_price).toFixed(2)}</ins>

                return <div className="description">${sale} {original}</div>
            }
        }
    }

    render() {
        let productName;
        let productCategory;

        if (!this.props.overallData.currentProduct) {
            productName = "Loading";
            productCategory = "Loading";
        } else {
            productName = this.props.overallData.currentProduct.name;
            productCategory = this.props.overallData.currentProduct.category;
        } 
        

        
        return (
            <div className="ui card">
                <div className="content">
                    {this.props.overallData.averageRating ? <Rating defaultRating={Math.ceil(this.props.overallData.averageRating)} maxRating={5} disabled /> : "Loading"}
                    <div className="meta"><span className="date">{productCategory}</span></div>
                    <div className="header">{productName}</div>
        
                    {this.renderPrice()}
                </div>
                <div className="content">
                    <Styles />
                    <SizeAndStock />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        overallData: state.overallData,
        selectedStyle: state.selectedStyle
      };
}

export default connect(mapStateToProps)(ProductCard);