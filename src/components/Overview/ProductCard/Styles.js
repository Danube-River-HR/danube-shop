import React, { Component } from 'react';
import StyleThumbnail from './StyleThumbnail';
import {connect} from "react-redux";

import SizeAndStock from "./SizeAndStock";

class Styles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedStyleId: 1
        }
    }

    changeStyle = (id) => {
        // console.log("WHAT STYLE AM I CLICKING:", id);
        this.setState({selectedStyleId: id})
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
                            selectedStyleId={this.state.selectedStyleId}
                            />
                    </>
                )
            })

            return (
                <>
                    <div className="styles-container">
                        <p>STYLE > {this.props.productStyles.results[0].name}</p>
                        {thumbnails}

                    </div>
                    <div className="purchase-options-container">
                        <SizeAndStock />
                    </div>
                </>
            )
        }
    }

    render() {
        // console.log('TESTING STYLES PROPS:', this.props);
        
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
        currentProductEntries: Object.entries(state.currentProduct)
      };
}

export default connect(mapStateToProps)(Styles);