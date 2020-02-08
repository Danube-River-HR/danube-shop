import React, { Component } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import ReviewForm from "./ReviewForm";

class ReviewModal extends Component {
  constructor(props) {
    super(props);
  }
  state = { open: false };
  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;

    return (
      <div>
        <button
          onClick={this.show("inverted")}
          class="ui secondary basic button"
        >
          Add a Review +
        </button>

        <Modal dimmer={dimmer} open={open} size="large" onClose={this.close}>
          <Modal.Header>Write a Review</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header>{this.props.productName}</Header>
              <ReviewForm />
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={this.close}>
              Cancel
            </Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Submit"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default ReviewModal;
