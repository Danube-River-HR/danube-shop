import React from "react";
import { Image, Modal } from "semantic-ui-react";

const PictureModal = ({ url }) => (
  <Modal
    trigger={<Image size="small" src={url} />}
    basic
    size="small"
    style={{ width: "auto" }}
  >
    <img src={`${url}`} />
  </Modal>
);

export default PictureModal;
