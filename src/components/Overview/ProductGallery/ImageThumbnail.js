import React, { Component } from "react";
import Img from "react-image";

class ImageThumbnail extends Component {
  constructor(props) {
    super(props);
  }

  handleThumbnailClick = () => {
    let thumbnailData = {
      mainURL: this.props.mainURL,
      index: this.props.index,
    };
    this.props.changeCurrentImage(thumbnailData);
  };

  renderSelectedHighlighting = () => {
    if (this.props.selectedThumbnailIndex === this.props.index) {
      return {
        border: "2px solid red",
      };
    } else {
      return {};
    }
  };

  render() {
    return (
      <Img
        src={this.props.thumbnailURL}
        onClick={this.handleThumbnailClick}
        className="thumbnail-child"
        style={this.renderSelectedHighlighting()}
      />
    );
  }
}

export default ImageThumbnail;
