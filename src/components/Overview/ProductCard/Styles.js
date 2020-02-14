import React, { Component } from 'react';
import StyleThumbnail from './StyleThumbnail';
import {connect} from "react-redux";

import SizeAndStock from "./SizeAndStock";
import {selectStyle} from '../../../redux/actions/index';

class Styles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            styleName: ''
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.overallData.productStyles) {
            if (this.props.selectedStyle === null) {
                this.props.selectStyle(this.props.overallData.productStyles.results[0]);
            } else if (this.props.overallData.productStyles.product_id !== prevProps.overallData.productStyles.product_id) {
                this.props.selectStyle(this.props.overallData.productStyles.results[0]);
            }
        }
    }

    renderStyleThumbnails = () => {
        let productStyles = this.props.overallData.productStyles;
        if (productStyles) {
            let thumbnails = productStyles.results.map((style) => {
                return (
                    <>
                        <StyleThumbnail 
                            key={style.style_id} 
                            id={style.style_id} 
                            url={style.photos[0].thumbnail_url}
                            selectedStyle={this.props.selectedStyle}
                            style={style}
                            />
                    </>
                )
            });

            return (
                <div className="styles-container">
                    {thumbnails}
                </div>  
            )
        }
    }

    renderStyleName = () => {
        let selectedStyle = this.props.selectedStyle;
        if (selectedStyle !== null) {
            let styleHeader = <p><b>STYLE ></b> {selectedStyle.name}</p>
            return <div className="stylename">{styleHeader}</div>
        } else {
            return <p>Loading</p>
        }
    }

    render() {

        return (
            <div className="styles-wrapper">
                {this.renderStyleName()}

                <div className="styles-thumbnails-wrapper">
                    {this.renderStyleThumbnails()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
        return {
        selectedStyle: state.selectedStyle,
        overallData: state.overallData
      };
}

export default connect(mapStateToProps, {selectStyle})(Styles);