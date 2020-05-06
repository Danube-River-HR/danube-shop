import React, { Component } from "react";
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from "react-share";
import { FacebookIcon, PinterestIcon, TwitterIcon } from "react-share";

class SocialMedia extends Component {
  constructor(props) {
    super(props);
    let img =
      "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80";
  }

  render() {
    return (
      <>
        <FacebookShareButton
          url="http://3.136.27.91:3000/"
          title="Check out this amazing clothing store!"
        >
          <button className="btn btn-circle">
            <FacebookIcon size={45} round />
          </button>
        </FacebookShareButton>
        <TwitterShareButton
          url="http://3.136.27.91:3000/"
          title="Check out this amazing clothing store!"
        >
          <button className="btn btn-circle">
            <TwitterIcon size={45} round />
          </button>
        </TwitterShareButton>
        <PinterestShareButton
          url="http://3.136.27.91:3000/"
          title="Check out this amazing clothing store!"
          media="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        >
          <button className="btn btn-circle">
            <PinterestIcon size={45} round />
          </button>
        </PinterestShareButton>
      </>
    );
  }
}

export default SocialMedia;
