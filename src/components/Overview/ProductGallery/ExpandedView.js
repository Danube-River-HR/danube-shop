import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

class ExpandedView extends Component {
  constructor(props) {
    super(props);
  }

  handleCloseButton = () => {
    this.props.closeExpandedView();
  };

  renderLightbox = () => {
    if (this.props.thumbnails.length !== 0) {
      let bigImages = this.props.thumbnails.map((picture) => {
        return picture.url;
      });
      let photoIndex = this.props.selectedThumbnailIndex;

      return (
        <Lightbox
          mainSrc={bigImages[photoIndex]}
          nextSrc={bigImages[(photoIndex + 1) % bigImages.length]}
          prevSrc={
            bigImages[(photoIndex + bigImages.length - 1) % bigImages.length]
          }
          onMovePrevRequest={() => {
            this.props.changeByArrow("arrowLeft");
          }}
          onMoveNextRequest={() => {
            this.props.changeByArrow("arrowRight");
          }}
          onCloseRequest={() => this.props.closeExpandedView()}
        />
      );
    }
  };

  render() {
    return (
      <div className="expanded-image-wrapper">{this.renderLightbox()}</div>
    );
  }
}

export default ExpandedView;
