import React, { Component } from 'react';
import StyleThumbnail from './StyleThumbnail';
import {connect} from "react-redux";

import SizeAndStock from "./SizeAndStock";

class Styles extends Component {
    constructor(props) {
        super(props)
    }


    renderStyleThumbnails = () => {
        if (this.props.productStyles.length !== 0) {
            let thumbnails = this.props.productStyles.results.map((style) => {
                return (
                    <>
                        <StyleThumbnail 
                            key={style.style_id} 
                            id={style.style_id} 
                            url={style.photos[0].thumbnail_url}
                            changeStyle={this.changeStyle}
                            selectedStyleId={this.props.selectedStyle}
                            />
                    </>
                )
            })

            return (
                <>
                    <div className="styles-container">
                        <p>STYLE > {this.props.productStyles.results[this.props.selectedStyle - 1].name}</p>
                        {thumbnails}

                    </div>
                    <div className="purchase-options-container">
                        <SizeAndStock selectedStyleId={this.props.selectedStyle}/>
                    </div>
                </>
            )
        }
    }

    render() {
        console.log('TESTING STYLES PROPS:', this.props);
        
        return (
            <div className="styles-wrapper">
                <div className="styles-thumbnails-wrapper">
                    
                    {this.renderStyleThumbnails()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
        return {
        currentProduct: state.currentProduct,
        averageRating: state.averageRating,
        relatedProducts: state.relatedProducts,
        productStyles: state.productStyles,
        selectedStyle: state.selectedStyle,
        currentProductEntries: Object.entries(state.currentProduct)
      };
}

export default connect(mapStateToProps)(Styles);