import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import "./ProductModal.css";

const ModalModalExample = props => {
  let features = {};
  console.log(props.currentProduct, 'current product')
  console.log(props.cardData, 'current card selected')
  props.currentProduct.features.forEach(feature => features[feature.feature] = { current: feature.value})
  props.cardData.features.forEach(feature => features[feature.feature] = { related: feature.value})
  console.log(features,'features obj')
  console.log(Object.keys(features))
  return (
    <Modal trigger={<Button>Show Modal</Button>}>
      <Modal.Header>Comparing</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          {/* <Header>Comparisons</Header> */}
          <h5>Current Product</h5>
          <ul>
  {Object.values(features).map(feature => <li>{feature.current}</li>)}
          </ul>
          <h5>Features</h5>
          <ul>
  {Object.keys(features).map(feature => <li>{feature}</li>)}
          </ul>
          <h5>Related Product</h5>
          <ul>
  {Object.values(features).map(feature => <li>{feature.related}</li>)}
          </ul>
          
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default ModalModalExample;
