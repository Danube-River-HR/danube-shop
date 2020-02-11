import React, { Component } from 'react';
import {connect} from 'react-redux';

import MainImage from './MainImage';
import GalleryThumbnails from './GalleryThumbnails';

class ProductGallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
           thumbnails: [],
           selectedThumbnailIndex: -1
        }
    }

    changeCurrentImage = (thumbnailData) => {
        this.setState({
            selectedThumbnailIndex: thumbnailData.index
        })
    }

    changeByArrow = (arrowChoice) => {
        if (this.state.thumbnails.length !== 0) {
            if (arrowChoice === "arrowLeft" && this.state.selectedThumbnailIndex > 0) {
                this.setState({selectedThumbnailIndex: this.state.selectedThumbnailIndex - 1})
            } else if (arrowChoice === "arrowRight" && this.state.selectedThumbnailIndex < this.state.thumbnails.length - 1) {
                this.setState({selectedThumbnailIndex: this.state.selectedThumbnailIndex + 1})
            }
        }
    }

    componentDidUpdate(prevProps) {
        // If our prop loads and currentImage is empty, set a new url there.
        if (this.props.selectedStyle !== null && this.state.selectedThumbnailIndex === -1) {
            this.setState({
                thumbnails: this.props.selectedStyle.photos,
                selectedThumbnailIndex: 0
            })
        } else if (this.props.selectedStyle !== null && this.state.selectedThumbnailIndex !== -1) {
            if (this.props.selectedStyle.style_id !== prevProps.selectedStyle.style_id) {
                this.setState({
                    thumbnails: this.props.selectedStyle.photos
                })
            }
        }
    }


    render() {
        console.log('PRODUCT GALLERY PROPS:', this.props);

        return (
            <div className="gallery-container">
                <GalleryThumbnails 
                    thumbnails={this.state.thumbnails}
                    changeCurrentImage={this.changeCurrentImage}
                    selectedThumbnailIndex={this.state.selectedThumbnailIndex}
                    />
                <MainImage 
                    changeByArrow={this.changeByArrow}
                    thumbnails={this.state.thumbnails}
                    selectedThumbnailIndex={this.state.selectedThumbnailIndex}
                    />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log('PRODUCT GALLERY STATE:', state);

    return {
        overallData: state.overallData,
        selectedStyle: state.selectedStyle
      };
}


export default connect(mapStateToProps)(ProductGallery);