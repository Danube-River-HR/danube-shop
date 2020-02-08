import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class ReviewForm extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    images: []
  };
  toggleUpload = () => console.log("yes");
  handleChange = (e, { value }) => this.setState({ value });

  // handleSubmit = () => this.setState({ email: '', name: '' })
  render() {
    const { value } = this.state;
    return (
      <Form>
        <Form.Group inline>
          <label>Do you recommend this product?</label>
          <Form.Radio
            label="Yes"
            value="yes"
            checked={value === "yes"}
            onChange={this.handleChange}
          />

          <Form.Radio
            label="No"
            value="no"
            checked={value === "no"}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Review Summary"
            maxLength="60"
            placeholder="(Max: 60 characters)  Example: Best purchase ever!"
          />
        </Form.Group>

        <Form.TextArea
          label="Review Body"
          maxLength="1000"
          placeholder="(Max: 1000 characters)  Why did you like the product or not?"
        />

        {/* <input
          type="file"
          id="file"
          name="Upload Image"
          style={{ display: "hidden" }}
          onChange={this.toggleUpload}
        /> */}
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="What is your nickname"
            placeholder="Example: jackson11!"
          />
          <Form.Input
            fluid
            label="Your email"
            placeholder="Example: jackson11@email.com"
          />
        </Form.Group>
      </Form>
    );
  }
}

export default ReviewForm;
