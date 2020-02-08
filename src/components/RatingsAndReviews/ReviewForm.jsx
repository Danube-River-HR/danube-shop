import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class ReviewForm extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    images: [],
    like: "",
    header: "",
    body: "",
    name: "",
    email: "",
    savedimages: [],
    savedlike: "",
    savedheader: "",
    savedbody: "",
    savedname: "",
    savedemail: ""
  };

  handleChangeForm = (e, { name, value }) => {
    console.log(value);
    this.setState({ [name]: value });
  };
  handleChangeRadio = (e, { value }) => {
    console.log(value);
    this.setState({ savedradio: value });
  };

  handleSubmit = () => {
    const { like, header, body, name, email, images } = this.state;

    this.setState({
      savedname: name,
      savedmail: email,
      savedheader: header,
      savedbody: body,
      savedliked: like,
      savedimages: images
    });
  };

  toggleUpload = (e, data) => console.log(data);

  render() {
    console.log(this.state);
    const { value } = this.state;
    return (
      <Form id="submit-form" onSubmit={this.handleSubmit}>
        <Form.Group inline>
          <label>
            Do you recommend this product?
            <span style={{ color: "red" }}> *</span>
          </label>
          <Form.Radio
            label="Yes"
            value="yes"
            checked={value === "yes"}
            onChange={this.handleChangeRadio}
          />

          <Form.Radio
            label="No"
            value="no"
            checked={value === "no"}
            onChange={this.handleChangeRadio}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Review Summary"
            maxLength="60"
            placeholder="(Max: 60 characters)  Example: Best purchase ever!"
            required
            onChange={this.handleChangeForm}
          />
        </Form.Group>

        <Form.TextArea
          label="Review Body"
          maxLength="1000"
          placeholder="(Max: 1000 characters)  Why did you like the product or not?"
          required
          onChange={this.handleChangeForm}
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
            required
            onChange={this.handleChangeForm}
          />
          <Form.Input
            fluid
            label="Your email"
            placeholder="Example: jackson11@email.com"
            required
            onChange={this.handleChangeForm}
          />
        </Form.Group>
      </Form>
    );
  }
}

export default ReviewForm;
