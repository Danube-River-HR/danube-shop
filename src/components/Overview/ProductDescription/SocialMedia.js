import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
} from "react-share";

class SocialMedia extends Component {
  constructor(props) {
    super(props);
    let img =
      "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80";
  }

  render() {
    return (
      <>
        {/* <Button circular color='facebook' icon='facebook' />
                 <Button circular color='twitter' icon='twitter' />
                 <Button circular color='pinterest' icon='pinterest' /> */}
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
