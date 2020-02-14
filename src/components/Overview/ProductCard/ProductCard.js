import React from 'react';
import {connect} from "react-redux";

import Styles from './Styles';
import SizeAndStock from './SizeAndStock';
import ProductDescription from '../ProductDescription/ProductDescription'
import SocialMedia from '../ProductDescription/SocialMedia'

class ProductCard extends React.Component {
    constructor(props) {
        super(props)
    }

    renderPrice = () => {
        if (!this.props.selectedStyle) {
            return <div className="price-wrapper">Loading</div>
        } else {
            if (this.props.selectedStyle.sale_price === "0") {
                let productPrice = Number(this.props.selectedStyle.original_price).toFixed(2);
                return <div className="price-wrapper">${productPrice}</div>
            } else {
                let original = <del>{Number(this.props.selectedStyle.original_price).toFixed(2)}</del>
                let sale = <ins style={{color:"red", margin: "0 5px 0 0"}}>{Number(this.props.selectedStyle.sale_price).toFixed(2)}</ins>

                return <div className="price-wrapper">${sale}  {original}</div>
            }
        }
    }

    render() {
        let productName;
        let productCategory;
        let avg;

        if (!this.props.overallData.currentProduct) {
            productName = "Loading";
            productCategory = "Loading";
        } else {
            productName = this.props.overallData.currentProduct.name;
            productCategory = this.props.overallData.currentProduct.category;
        } 
        
        if (!this.props.overallData.averageRating) {
            avg = 0;
        } else {
            avg = this.props.overallData.averageRating;
        }

        let starPercent = Math.round((avg / 5) * 100);
        
        return (
            <div className="ui card">
                <div className="content">
                    <div className="rating-wrapper">
                        {/* {this.props.overallData.averageRating ? <Rating defaultRating={Math.ceil(this.props.overallData.averageRating)} maxRating={5} disabled /> : "Loading"} */}
                        
                        <div className="star-ratings product-card-star" style={{fontSize: "100%"}}>
                            <div className="fill-ratings" style={{width: `${starPercent}%`}}>
                                <p className="starSpan">★★★★★</p>
                            </div>
                            <div className="empty-ratings">
                                <p className="starSpan">★★★★★</p>
                            </div>
                        </div>
                        

                        <div className="meta"><a href="#main-product-rating">Read All Reviews</a></div>
                    </div>
                    <div className="header-wrapper">
                        <div className="header product-name">{productName}</div>
                        <div className="meta product-category"><span className="date">{productCategory}</span></div>
                    </div>
        
                    {this.renderPrice()}

                    <div className="options-wrapper">
                        <Styles />
                        <SizeAndStock />
                    </div>

                    <div className="description-wrapper">
                        <ProductDescription />
                    </div>

                    <div className="social-media">
                        <SocialMedia />
                    </div>
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