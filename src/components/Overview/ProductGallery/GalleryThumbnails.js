import React, { Component } from 'react'
import ImageThumbnail from './ImageThumbnail';

class GalleryThumbnails extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    renderGalleryThumbnails = () => {
        if (this.props.thumbnails.length !== 0) {
            let thumbnailsList = this.props.thumbnails.map((item, index) => {
                return (
                    <ImageThumbnail 
                        thumbnailURL={item.thumbnail_url} 
                        changeCurrentImage={this.props.changeCurrentImage}
                        selectedThumbnailIndex={this.props.selectedThumbnailIndex}
                        mainURL={item.url}
                        index={index}
                        key={index}
                        
                        />
                )
            });
            return thumbnailsList;
        }
    }

    render() {
        return (
            <div className="thumbnail-wrapper">
                {this.renderGalleryThumbnails()}
            </div>
        )
    }
}

export default GalleryThumbnails;
