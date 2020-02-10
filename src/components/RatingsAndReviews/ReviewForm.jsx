import React, { Component } from "react";
import { Form, Button, Image, FormRadio } from "semantic-ui-react";
import ReactFilestack from "filestack-react";
import { apikey } from "./APIkey";
import placeholder from "./placeholder.jpg";

const basicOptions = {
  accept: "image/*",
  fromSources: ["local_file_system", "instagram", "facebook"],
  maxSize: 1024 * 1024,
  maxFiles: 5
};

class ReviewForm extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    uploadCounter: 0,
    placeholder: [
      placeholder,
      placeholder,
      placeholder,
      placeholder,
      placeholder
    ],
    images: [],
    rateValue: "",
    recValue: "",
    sizeValue: "",
    widthValue: "",
    comfortValue: "",
    qualityValue: "",
    lengthValue: "",
    fitValue: "",
    header: "",
    body: "",
    name: "",
    email: ""
  };

  //************************************************************************************************

  handleChangeForm = (e, { name, value }) => {
    console.log(name);
    this.setState({ [name]: value });
  };

  handleChangeRadioRecommend = (e, { recValue }) => {
    console.log(recValue);
    this.setState({ recValue: recValue });
  };

  handleChangeRadioRecommend = () => {};

  handleSubmit = () => {
    const {
      rateValue,
      recValue,
      header,
      body,
      name,
      email,
      images
    } = this.state;
    console.log(rateValue, recValue, header, body, name, email, images);
  };

  uploadPhoto = data => this.setState({ images: data });

  //************************************************************************************************
  render() {
    console.log(apikey);
    console.log(this.state);
    const { value } = this.state;
    return (
      <Form id="submit-form" onSubmit={this.handleSubmit}>
        <Form.Group inline>
          <label>Rate it</label>
          <FormRadio label="1 star" value="1" />
          <FormRadio label="2 star" value="2" />
          <FormRadio label="3 star" value="3" />
          <FormRadio label="4 star" value="4" />
          <FormRadio label="5 star" value="5" />
        </Form.Group>
        <Form.Group inline>
          {/* <form> */}
          <label>
            Do you recommend this product?
            <span style={{ color: "red" }}> *</span>
          </label>
          <Form.Radio
            label="Yes"
            value="yes"
            checked={this.state.recValue === "yes"}
            onChange={this.handleChangeRadioRecommend}
          />

          <Form.Radio
            label="No"
            value="no"
            name="noRadio"
            checked={this.state.recValue === "no"}
            onChange={this.handleChangeRadioRecommend}
          />
          {/* </form> */}
        </Form.Group>
        <Form.Group inline id="characteristics">
          <label>Characteristics: </label>
          <div>
            <label className="characteristicsLabel">Size</label>
            <FormRadio label="A size too small" value="1" />
            <FormRadio label="½ a size too small" value="2" />
            <FormRadio label="Perfect" value="3" />
            <FormRadio label="½ a size too big" value="4" />
            <FormRadio label="A size too wide" value="5" />
          </div>
          <div>
            <label className="characteristicsLabel">Width</label>
            <FormRadio label="Too narrow" value="1" />
            <FormRadio label="Slightly narrow" value="2" />
            <FormRadio label="Perfect" value="3" />
            <FormRadio label="Slightly wide" value="4" />
            <FormRadio label="Too wide" value="5" />
          </div>
          <div>
            <label className="characteristicsLabel">Comfort</label>
            <FormRadio label="Uncomfortable" value="1" />
            <FormRadio label="Slightly uncomfortable" value="2" />
            <FormRadio label="Ok" value="3" />
            <FormRadio label="Comfortable" value="4" />
            <FormRadio label="Perfect" value="5" />
          </div>
          <div>
            <label className="characteristicsLabel">Quality</label>
            <FormRadio label="Poor" value="1" />
            <FormRadio label="Below average" value="2" />
            <FormRadio label="What I expected" value="3" />
            <FormRadio label="Pretty great" value="4" />
            <FormRadio label="Perfect" value="5" />
          </div>
          <div>
            <label className="characteristicsLabel">Length</label>
            <FormRadio label="Runs Short" value="1" />
            <FormRadio label="Runs slightly short" value="2" />
            <FormRadio label="Perfect" value="3" />
            <FormRadio label="Runs slightly long" value="4" />
            <FormRadio label="Runs long" value="5" />
          </div>
          <div>
            <label className="characteristicsLabel">Fit</label>
            <FormRadio label="Runs tight" value="1" />
            <FormRadio label="Runs slightly tight" value="2" />
            <FormRadio label="Perfect" value="3" />
            <FormRadio label="Runs slightly long" value="4" />
            <FormRadio label="Runs long" value="5" />
          </div>
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
          actionOptions={basicOptions}
          customRender={({ onPick }) => (
            <div>
              <strong>Upload pictures (Optional) </strong>
              {/* <br />
              <br /> */}
              {/* style={{ display: "flexbox", flexDirection: "row" }} */}
              <div style={{ display: "inline" }}>
                <Button color="green" compact onClick={onPick}>
                  Upload
                </Button>
                <br />
                <br />
                <div style={{ display: "inline" }}>
                  {this.state.images.length === 0 ? (
                    <Image.Group size="tiny">
                      {this.state.placeholder.map(placeholder => (
                        <Image src={require("./placeholder.jpg")} />
                      ))}
                    </Image.Group>
                  ) : (
                    <Image.Group size="tiny">
                      {this.state.images.map(pic => (
                        <Image src={pic.url} />
                      ))}
                    </Image.Group>
                  )}
                </div>
              </div>
              <br />
            </div>
          )}
          onSuccess={res => this.uploadPhoto(res.filesUploaded)}
        />

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
        <button onClick={() => console.log(this.state.images)}>check</button>
      </Form>
    );
  }
}

export default ReviewForm;

// filename: "sunflower.jpg"
// handle: "njiaeaWHTbyb6ggIxU2T"
// mimetype: "image/jpeg"
// originalPath: "sunflower.jpg"
// size: 38700
// source: "local_file_system"
// url: "https://cdn.filestackcontent.com/njiaeaWHTbyb6ggIxU2T"
// uploadId: "5EPh2371f0o3ui6T"
// originalFile: {name: "sunflower.jpg", type: "image/jpeg", size: 38700}
// status: "Stored"
