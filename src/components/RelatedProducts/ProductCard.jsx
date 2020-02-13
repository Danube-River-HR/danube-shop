import React from "react";
import ProductModal from "./ProductModal";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const Card = props => {
  let defaultImg =
    "https://www.alterenterprise.com/wp-content/uploads/2014/02/Image-not-available_1.jpg";

  let containStyles = () => {
    if (props.style !== undefined) {
      return props.style.photos[0].url === null ? (
        <img
          src={
            "https://www.alterenterprise.com/wp-content/uploads/2014/02/Image-not-available_1.jpg"
          }
          alt={"Loading"}
          // onClick={() => props.handleCardClick(props.data.id)}
        />
      ) : (
        <img
          src={props.style.photos[0].url}
          alt={
            "https://www.alterenterprise.com/wp-content/uploads/2014/02/Image-not-available_1.jpg"
          }
          // onClick={() => props.handleCardClick(props.data.id)}
        />
      );
    }
  };
  return (
    <div className="productCard">
      <Link to={`/${props.data.id}`}>
      {containStyles()}
      </Link>
      <ProductModal
        cardData={props.data}
        currentProduct={props.currentProduct}
      />
      <div className="cardInfo">
        <div>{props.data.category}</div>
        <div>{props.data.name}</div>
        <div>${props.data.default_price}</div>
      </div>
    </div>
  );
};

export default Card;
