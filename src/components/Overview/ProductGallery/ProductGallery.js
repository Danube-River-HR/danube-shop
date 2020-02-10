import React, { Component } from 'react';
import {connect} from 'react-redux';

import MainImage from './MainImage';
import GalleryThumbnails from './GalleryThumbnails';

class ProductGallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
           currentImage: '',
           thumbnails: [],
           selectedThumbnailIndex: 0
        }
    }

    changeCurrentImage = (thumbnailData) => {
        this.setState({
            currentImage: thumbnailData.mainURL,
            selectedThumbnailIndex: thumbnailData.index
        })
    }

    componentDidUpdate(prevProps) {
        // If our prop loads and currentImage is empty, set a new url there.
        if (this.props.selectedStyle !== null && this.state.currentImage === '') {
            this.setState({
                currentImage: this.props.selectedStyle.photos[0].url,
                thumbnails: this.props.selectedStyle.photos
            })
        } else if (this.props.selectedStyle !== null && this.state.currentImage !== '') {
            if (this.props.selectedStyle.style_id !== prevProps.selectedStyle.style_id) {
                this.setState({
                    currentImage: this.props.selectedStyle.photos[0].url,
                    thumbnails: this.props.selectedStyle.photos,
                    selectedThumbnailIndex: 0
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
                <MainImage imageURL={this.state.currentImage}/>
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