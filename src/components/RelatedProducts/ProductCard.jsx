import React from "react";
import ProductModal from "./ProductModal";

const Card = props => {
  let containStyles = () => {
    if (props.style !== undefined) {
      return props.style.photos[0].url === null ? (
        <img
          src={
            "https://www.alterenterprise.com/wp-content/uploads/2014/02/Image-not-available_1.jpg"
          }
          alt={"Loading"}
          onClick={() => props.handleCardClick(props.data.id)}
        />
      ) : (
        <img
          src={props.style.photos[0].url}
          alt={
            "https://www.alterenterprise.com/wp-content/uploads/2014/02/Image-not-available_1.jpg"
          }
          onClick={() => props.handleCardClick(props.data.id)}
        />
      );
    }
  };
  return (
    <div className="productCard">
      {/* <button class="ui icon button" onClick={props.handleClick}>
        <i class="star outline icon"></i>
      </button> */}
      <ProductModal cardData={props.data} currentProduct={props.currentProduct}/>
      {containStyles()}
      <div className="cardInfo">
        <div>{props.data.category}</div>
        <div>{props.data.name}</div>
        <div>${props.data.default_price}</div>
      </div>
    </div>
  );
};

export default Card;
