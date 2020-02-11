import React, { Component } from 'react'
import Img from 'react-image';
import {Loader, Icon} from 'semantic-ui-react';

class MainImage extends Component {
    constructor(props) {
        super(props)
    }

    handleArrowClick = (e) => {
        let value = e.target.getAttribute("value");
        this.props.changeByArrow(value);
    }

    renderCurrentImage = () => {
        if (this.props.thumbnails.length !== 0) {
            return this.props.thumbnails[this.props.selectedThumbnailIndex].url;
        } else {
            return null;
        }
    }

    renderLeftArrow = () => {
        if (this.props.selectedThumbnailIndex !== 0) {
            return (<Icon 
                name="arrow left" 
                size="large"
                value="arrowLeft"
                />)
        }
    }

    renderRightArrow = () => {
        if (this.props.selectedThumbnailIndex !== this.props.thumbnails.length - 1) {
            return (<Icon 
                name="arrow right" 
                size="large"
                value="arrowRight"
                />)
        }
    }

    render() {
        return (
            <div className="image-wrapper">
                <div className="arrow-child" onClick={this.handleArrowClick}>
                    {this.renderLeftArrow()}
                </div>
                <Img 
                    src={[this.renderCurrentImage(), `https://www.quantabiodesign.com/wp-content/uploads/No-Photo-Available.jpg`]}
                    loader={Loader}
                    className="image-child"
                    />
                <div className="arrow-child" onClick={this.handleArrowClick}>
                    {this.renderRightArrow()}
                </div>
            </div>
        )
    }
}



export default MainImage;