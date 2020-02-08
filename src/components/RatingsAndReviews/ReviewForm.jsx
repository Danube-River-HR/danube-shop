import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import ReactFilestack from "filestack-react";
import { apikey } from "./APIkey";

class ReviewForm extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    images: [],
    header: "",
    body: "",
    name: "",
    email: ""
  };

  handleChangeForm = (e, { name, value }) => {
    console.log(name);
    this.setState({ [name]: value });
  };
  handleChangeRadio = (e, { value }) => {
    console.log(value);
    this.setState({ value });
  };

  handleSubmit = () => {
    const { value, header, body, name, email, images } = this.state;
    console.log(value, header, body, name, email, images);
  };

  toggleUpload = (e, data) => console.log(data);

  render() {
    console.log(apikey);
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
            name="header"
            maxLength="60"
            placeholder="(Max: 60 characters)  Example: Best purchase ever!"
            onChange={this.handleChangeForm}
          />
        </Form.Group>

        <Form.TextArea
          label="Review Body"
          name="body"
          maxLength="1000"
          placeholder="(Max: 1000 characters)  Why did you like the product or not?"
          onChange={this.handleChangeForm}
        />
        <ReactFilestack
          apikey={apikey}
          customText="Upload Photo"
          buttonClass="ui medium button gray"
          onSuccess={this.onSuccess}
          onError={this.onError}
        />
        {/* <ReactFilestack
          apikey={apikey}
          // actionOptions={PickerOptions}
          customRender={({ onPick }) => (
            <div>
              <strong>Find an avatar</strong>
              <button onClick={onPick}>Pick</button>
            </div>
          )}
          onSuccess={this.yourCallbackFunction}
        /> */}

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
            name="name"
            placeholder="Example: jackson11!"
            onChange={this.handleChangeForm}
          />
          <Form.Input
            fluid
            label="Your email"
            name="email"
            placeholder="Example: jackson11@email.com"
            onChange={this.handleChangeForm}
          />
        </Form.Group>
        <button onClick={() => console.log(this.state.header)}>check</button>
      </Form>
    );
  }
}

export default ReviewForm;
