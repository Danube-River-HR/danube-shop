import React, { Component } from "react";
import { Form, Button, Image, FormRadio, Rating } from "semantic-ui-react";
import ReactFilestack from "filestack-react";
import { apikey } from "./APIkey";
import axios from "axios";

const basicOptions = {
  accept: "image/*",
  fromSources: ["local_file_system", "instagram", "facebook"],
  maxSize: 1024 * 1024,
  maxFiles: 5
};

class ReviewForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gaveReview: 0,
      uploadCounter: 0,
      placeholder: [1, 2, 3, 4, 5],
      images: [],
      rateValue: "",
      recValue: "",
      comfortValue: "",
      qualityValue: "",
      comfort: "",
      lengthValue: "",
      fitValue: "",
      header: "",
      body: "",
      name: "",
      email: "",
      showValid: false,
      confirm: false
    };
  }

  //************************************************************************************************

  handleChangeForm = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleChangeFormBody = (e, { value }) => {
    let count = this.state.bodyCount;
    this.setState({ body: value, bodyCount: count - 1 });
  };

  /*--------------- RADIO FORMS ---------------*/

  handleRate = (e, { rating }) => {
    this.setState({ rateValue: rating });
  };

  handleChangeRadioRecommend = (e, { value }) => {
    value === "yes"
      ? this.setState({ recValue: true })
      : this.setState({ recValue: false });
  };

  handleChangeRadioComfort = (e, { value }) => {
    this.setState({ comfortValue: value });
  };

  handleChangeRadioQuality = (e, { value }) => {
    this.setState({ qualityValue: value });
  };

  handleChangeRadioLength = (e, { value }) => {
    this.setState({ lengthValue: value });
  };

  handleChangeRadioFit = (e, { value }) => {
    this.setState({ fitValue: value });
  };

  /*--------------- Handle Submission ---------------*/

  validateEverything = () => {
    let validCount = 0;

    if (this.state.rateValue !== "") validCount++;
    if (this.state.recValue !== "") validCount++;
    if (this.state.qualityValue !== "") validCount++;
    if (this.state.comfortValue !== "") validCount++;
    if (this.state.lengthValue !== "") validCount++;
    if (this.state.fitValue !== "") validCount++;
    if (this.state.body.length >= 50) validCount++;
    if (this.state.name !== "") validCount++;
    if (this.state.email !== "") validCount++;
    if (validCount === 9) {
      this.handleSubmit();
    } else this.setState({ showValid: true });
  };

  handleSubmit = () => {
    if (this.props.meta.characteristics.Size !== undefined) {
      axios
        .post(`http://3.134.102.30/reviews/${this.props.id}`, {
          rating: Number(this.state.rateValue),
          summary: this.state.header,
          body: this.state.body,
          recommend: this.state.recValue,
          name: this.state.name,
          email: this.state.email,
          photos: this.state.images,
          characteristics: {
            [this.props.meta.characteristics.Size.id]: Number(
              this.state.fitValue
            ),
            [this.props.meta.characteristics.Width.id]: Number(
              this.state.lengthValue
            ),
            [this.props.meta.characteristics.Comfort.id]: Number(
              this.state.comfortValue
            ),
            [this.props.meta.characteristics.Quality.id]: Number(
              this.state.qualityValue
            )
          }
        })
        .then(response => {
          this.props.closeModal(true);
          this.setState({ showValid: false });
        });
    } else {
      axios
        .post(`http://3.134.102.30/reviews/${this.props.id}`, {
          rating: Number(this.state.rateValue),
          summary: this.state.header,
          body: this.state.body,
          recommend: this.state.recValue,
          name: this.state.name,
          email: this.state.email,
          photos: this.state.images,
          characteristics: {
            [this.props.meta.characteristics.Fit.id]: Number(
              this.state.fitValue
            ),
            [this.props.meta.characteristics.Length.id]: Number(
              this.state.lengthValue
            ),
            [this.props.meta.characteristics.Comfort.id]: Number(
              this.state.comfortValue
            ),
            [this.props.meta.characteristics.Quality.id]: Number(
              this.state.qualityValue
            )
          }
        })
        .then(response => {
          this.props.closeModal(true);
          this.setState({ showValid: false });
        });
    }
  };

  /*--------------- Upload photo ---------------*/

  uploadPhoto = data => {
    let images = [];

    data.map(photo => images.push(photo.url));
    this.setState({ images: images });
  };

  //************************************************************************************************
  render() {
    return (
      <Form id="submit-form" onSubmit={this.validateEverything}>
        <Form.Group inline>
          <label>
            Rate it <span style={{ color: "red" }}> *</span>
          </label>
          <Rating
            maxRating={5}
            onRate={this.handleRate}
            size="massive"
            icon="star"
          />
        </Form.Group>
        <br />
        <Form.Group inline>
          <label>
            Do you recommend this product?
            <span style={{ color: "red" }}> *</span>
          </label>
          <Form.Radio
            label="Yes"
            value="yes"
            checked={this.state.recValue === true}
            onChange={this.handleChangeRadioRecommend}
          />

          <Form.Radio
            label="No"
            value="no"
            checked={this.state.recValue === false}
            onChange={this.handleChangeRadioRecommend}
          />
        </Form.Group>
        <br />
        <Form.Group inline id="characteristics">
          <label>
            Characteristics: <span style={{ color: "red" }}> *</span>
          </label>
          <div>
            <label className="characteristicsLabel">Comfort</label>
            <FormRadio
              label="Uncomfortable"
              value="1"
              checked={this.state.comfortValue === "1"}
              onChange={this.handleChangeRadioComfort}
            />
            <FormRadio
              label="Slightly uncomfortable"
              value="2"
              checked={this.state.comfortValue === "2"}
              onChange={this.handleChangeRadioComfort}
            />
            <FormRadio
              label="Ok"
              value="3"
              checked={this.state.comfortValue === "3"}
              onChange={this.handleChangeRadioComfort}
            />
            <FormRadio
              label="Comfortable"
              value="4"
              checked={this.state.comfortValue === "4"}
              onChange={this.handleChangeRadioComfort}
            />
            <FormRadio
              label="Perfect"
              value="5"
              checked={this.state.comfortValue === "5"}
              onChange={this.handleChangeRadioComfort}
            />
          </div>
          <div>
            <label className="characteristicsLabel">Quality</label>
            <FormRadio
              label="Poor"
              value="1"
              checked={this.state.qualityValue === "1"}
              onChange={this.handleChangeRadioQuality}
            />
            <FormRadio
              label="Below average"
              value="2"
              checked={this.state.qualityValue === "2"}
              onChange={this.handleChangeRadioQuality}
            />
            <FormRadio
              label="What I expected"
              value="3"
              checked={this.state.qualityValue === "3"}
              onChange={this.handleChangeRadioQuality}
            />
            <FormRadio
              label="Pretty great"
              value="4"
              checked={this.state.qualityValue === "4"}
              onChange={this.handleChangeRadioQuality}
            />
            <FormRadio
              label="Perfect"
              value="5"
              checked={this.state.qualityValue === "5"}
              onChange={this.handleChangeRadioQuality}
            />
          </div>
          {this.props.meta.characteristics.Width !== undefined ? (
            <div>
              <label className="characteristicsLabel">Width</label>
              <FormRadio
                label="Too narrow"
                value="1"
                checked={this.state.lengthValue === "1"}
                onChange={this.handleChangeRadioLength}
              />
              <FormRadio
                label="Slightly narrow"
                value="2"
                checked={this.state.lengthValue === "2"}
                onChange={this.handleChangeRadioLength}
              />
              <FormRadio
                label="Perfect"
                value="3"
                checked={this.state.lengthValue === "3"}
                onChange={this.handleChangeRadioLength}
              />
              <FormRadio
                label="Slightly wide"
                value="4"
                checked={this.state.lengthValue === "4"}
                onChange={this.handleChangeRadioLength}
              />
              <FormRadio
                label="Too wide"
                value="5"
                checked={this.state.lengthValue === "5"}
                onChange={this.handleChangeRadioLength}
              />
            </div>
          ) : (
            <div>
              <label className="characteristicsLabel">Length</label>
              <FormRadio
                label="Runs Short"
                value="1"
                checked={this.state.lengthValue === "1"}
                onChange={this.handleChangeRadioLength}
              />
              <FormRadio
                label="Runs slightly short"
                value="2"
                checked={this.state.lengthValue === "2"}
                onChange={this.handleChangeRadioLength}
              />
              <FormRadio
                label="Perfect"
                value="3"
                checked={this.state.lengthValue === "3"}
                onChange={this.handleChangeRadioLength}
              />
              <FormRadio
                label="Runs slightly long"
                value="4"
                checked={this.state.lengthValue === "4"}
                onChange={this.handleChangeRadioLength}
              />
              <FormRadio
                label="Runs long"
                value="5"
                checked={this.state.lengthValue === "5"}
                onChange={this.handleChangeRadioLength}
              />
            </div>
          )}
          {this.props.meta.characteristics.Size !== undefined ? (
            <div>
              <label className="characteristicsLabel">Size</label>
              <FormRadio
                label="A size too small"
                value="1"
                checked={this.state.fitValue === "1"}
                onChange={this.handleChangeRadioFit}
              />
              <FormRadio
                label="½ a size too small"
                value="2"
                checked={this.state.fitValue === "2"}
                onChange={this.handleChangeRadioFit}
              />
              <FormRadio
                label="Perfect"
                value="3"
                checked={this.state.fitValue === "3"}
                onChange={this.handleChangeRadioFit}
              />
              <FormRadio
                label="½ a size too big"
                value="4"
                checked={this.state.fitValue === "4"}
                onChange={this.handleChangeRadioFit}
              />
              <FormRadio
                label="A size too wide"
                value="5"
                checked={this.state.fitValue === "5"}
                onChange={this.handleChangeRadioFit}
              />
            </div>
          ) : (
            <div>
              <label className="characteristicsLabel">Fit</label>
              <FormRadio
                label="Runs tight"
                value="1"
                checked={this.state.fitValue === "1"}
                onChange={this.handleChangeRadioFit}
              />
              <FormRadio
                label="Runs slightly tight"
                value="2"
                checked={this.state.fitValue === "2"}
                onChange={this.handleChangeRadioFit}
              />
              <FormRadio
                label="Perfect"
                value="3"
                checked={this.state.fitValue === "3"}
                onChange={this.handleChangeRadioFit}
              />
              <FormRadio
                label="Runs slightly long"
                value="4"
                checked={this.state.fitValue === "4"}
                onChange={this.handleChangeRadioFit}
              />
              <FormRadio
                label="Runs long"
                value="5"
                checked={this.state.fitValue === "5"}
                onChange={this.handleChangeRadioFit}
              />
            </div>
          )}
        </Form.Group>

        {this.state.showValid === true ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              color: "red",
              font: "bold"
            }}
          >
            Don't forget to rate our product! Take a moment and fill out the
            options provided above. Your feedback helps us improve!
          </div>
        ) : null}

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
          label={
            this.state.body.length >= 50
              ? "Review Body (min: ✓ )"
              : `Review Body (min: ${50 - this.state.body.length})`
          }
          name="body"
          maxLength="1000"
          placeholder="(Max: 1000 characters)  Why did you like the product or not?"
          onChange={this.handleChangeFormBody}
          required
        />

        <ReactFilestack
          apikey={apikey}
          actionOptions={basicOptions}
          customRender={({ onPick }) => (
            <div>
              <strong>Upload pictures (Optional) </strong>
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
                        <Image
                          src={require("./placeholder.jpg")}
                          alt="https://www.pngkey.com/png/detail/395-3956030_plain-t-shirt-comments-short-sleeve-shirt-icon.png"
                        />
                      ))}
                    </Image.Group>
                  ) : (
                    <Image.Group size="tiny">
                      {this.state.images.map(url => (
                        <Image src={url} />
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
            required
          />
          <Form.Input
            fluid
            label="Your email"
            name="email"
            placeholder="Example: jackson11@email.com"
            onChange={this.handleChangeForm}
            required
          />
        </Form.Group>
      </Form>
    );
  }
}

// const confirmModal = () => ()

export default ReviewForm;
