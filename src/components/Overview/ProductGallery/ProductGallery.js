import React, { Component } from 'react';
import {connect} from 'react-redux';

import MainImage from './MainImage';
import GalleryThumbnails from './GalleryThumbnails';
import ExpandedView from './ExpandedView';

class ProductGallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
           thumbnails: [],
           selectedThumbnailIndex: -1,
           expandView: false
        }
    }

    closeExpandedView = () => {
        this.setState({expandView: false})
    }

    openExpandedView = () => {
        this.setState({expandView: true})
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
        // If our prop loads selectedStyle and this local state's thumbnailIndex is not set yet, apply initial index of 0
        if (this.props.selectedStyle !== null && this.state.selectedThumbnailIndex === -1) {
            this.setState({
                thumbnails: this.props.selectedStyle.photos,
                selectedThumbnailIndex: 0
            });
        // If we are changing styles, set a new array of style photos and reset initial index back to 0
        } else if (this.props.selectedStyle !== null && this.state.selectedThumbnailIndex !== -1) {
            if (this.props.selectedStyle.style_id !== prevProps.selectedStyle.style_id) {
                this.setState({
                    thumbnails: this.props.selectedStyle.photos,
                    selectedThumbnailIndex: 0
                });
            } 
        } 
        
        // else if (this.props.overallData.currentData !== undefined) {
        //     if (this.props.overallData.currentData.id !== prevProps.overallData.currentData.id) {
        //         this.setState({
        //             selectedThumbnailIndex: 0
        //         });
        //     }
        // }
    }


    render() {
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
                    openExpandedView={this.openExpandedView}
                    />
                
                {this.state.expandView ? 
                <ExpandedView 
                    thumbnails={this.state.thumbnails}
                    selectedThumbnailIndex={this.state.selectedThumbnailIndex}
                    closeExpandedView={this.closeExpandedView}
                    changeByArrow={this.changeByArrow}
                /> : null}
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


export default connect(mapStateToProps)(ProductGallery);