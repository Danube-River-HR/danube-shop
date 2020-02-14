import React, { Component } from 'react'
import ImageThumbnail from './ImageThumbnail';

class GalleryThumbnails extends Component {
    constructor(props) {
        super(props)
    }

    renderGalleryThumbnails = () => {
        if (this.props.thumbnails.length > 0) {
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
        } else {
            return (
                <ImageThumbnail 
                        thumbnailURL="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/480px-Solid_white.svg.png"
                        changeCurrentImage={this.props.changeCurrentImage}
                        selectedThumbnailIndex={this.props.selectedThumbnailIndex}
                        index="0"
                        />
            )
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
