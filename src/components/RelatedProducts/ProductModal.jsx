import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import "./ProductModal.css";

const ModalModalExample = props => {
  let features = {};
  props.currentProduct.features.forEach(
    feature => (features[feature.feature] = { current: feature.value })
  );
  props.cardData.features.forEach(
    feature => (features[feature.feature] = { related: feature.value })
  );
  // console.log(features,'features obj')
  let productModal = () => {
    let table = [];
    for (let feature in features) {
      // console.log(features[feature].current,'current')
       table.push(
        <div class="modalContainer">
          <div>{features[feature].current}</div>
          <div class="feature">{feature}</div>
          <div>{features[feature].related}</div>
        </div>
      );
    }
    // console.log(table)
    return table;
  };

  return (
    <Modal
      trigger={
        <Button id="modal-button">
          <i class="star outline icon"></i>
        </Button>
      }
    >
      <Modal.Header>Comparing</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          {/* <Header>Comparisons</Header> */}
          <div class="modalContainer">
          <div>Current Product</div>
          <div>Features</div>
          <div>Related Product</div>
          </div>
          
          <ul>
            {productModal()}
            {/* {Object.values(features).map(feature => <li>{feature.current}</li>)}
          </ul>
          <h5>Features</h5>
          <ul>
  {Object.keys(features).map(feature => <li>{feature}</li>)}
          </ul>
          <h5>Related Product</h5>
          <ul>
  {Object.values(features).map(feature => <li>{feature.related}</li>)} */}
          </ul>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default ModalModalExample;
