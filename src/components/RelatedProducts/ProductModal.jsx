import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import "./ProductModal.css";


const ModalModalExample = props => {
  let features = {};
  props.currentProduct.features.forEach(feature => {
    features[feature.feature] = {};
    features[feature.feature]["current"] = feature.value;
    features[feature.feature]["related"] = features[feature.feature]["related"]
      ? feature.value
      : "-----";
  });
  props.cardData.features.forEach(feature => {
    if (!features[feature.feature]) {
      features[feature.feature] = {};
    }
    features[feature.feature]["related"] = feature.value;
    features[feature.feature]["current"] = features[feature.feature]["current"]
      ? features[feature.feature]["current"]
      : "-----";
  });

  let productModal = () => {
    let table = [];
    for (let feature in features) {
      table.push(
        <div class="divTableBody">
          <div class="divTableRow">
            <div class="divTableCell">{features[feature].current}</div>
            <div
              class="divTableCell"
              style={{ fontWeight: "bold", textTransform: "uppercase" }}
            >
              {feature}
            </div>
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
