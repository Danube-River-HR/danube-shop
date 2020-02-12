import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import "./ProductModal.css";

const ModalModalExample = props => {
  // console.log(props.currentProduct,'current product')
  let features = {};
  console.log(props.currentProduct.features, props.cardData.features, 'compare')
  props.currentProduct.features.forEach(
    // feature => (features[feature.feature] = { current: feature.value })
    feature => {
      features[feature.feature] = {}
      features[feature.feature]['current'] = feature.value
      features[feature.feature]['related'] = features[feature.feature]['related'] ? feature.value : '-----'
    }

  );
  props.cardData.features.forEach(
    feature => {
      if (!features[feature.feature]) {
        features[feature.feature] = {}
      }
      features[feature.feature]['related'] = feature.value
      features[feature.feature]['current'] = features[feature.feature]['current'] ? features[feature.feature]['current'] : '-----'
    }
  );
  
  // console.log(features,'features obj')
  let productModal = () => {
    let table = [];
    for (let feature in features) {
      // console.log(features,'feature')
      table.push(
        // <div class="modalContainer">
        //   <div>{features[feature].current}</div>
        //   <div class="feature">{feature}</div>
        //   <div>{features[feature].related}</div>
        // </div>
        <div class="divTableBody">
          <div class="divTableRow">
            <div class="divTableCell">{features[feature].current}</div>
            <div class="divTableCell" style={{fontWeight: 'bold', textTransform: 'uppercase'}}>{feature}</div>
            <div class="divTableCell">{features[feature].related}</div>
          </div>
        </div>
      );
    }
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
          {/* <Header>Comparisons</Header>
          <div class="modalContainer">
          <div>Current Product</div>
          <div>Features</div>
          <div>Related Product</div>
          </div>
          
          <ul>
            {productModal()}
          </ul> */}
          <div class="divTable blueTable">
            <div class="divTableHeading">
              <div class="divTableRow">
                <div class="divTableHead">{props.currentProduct.name}</div>
                <div class="divTableHead"></div>
                <div class="divTableHead">{props.cardData.name}</div>
              </div>
            </div>
            {productModal()}
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default ModalModalExample;
