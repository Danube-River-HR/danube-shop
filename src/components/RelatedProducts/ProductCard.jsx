import React from "react";

const Card = props => {
  let containStyles = () => {
    if (props.style !== undefined) {
      return props.style.photos[0].url === null ? (
        <img
          src={
            "https://www.alterenterprise.com/wp-content/uploads/2014/02/Image-not-available_1.jpg"
          }
          alt={"Loading"}
        />
      ) : (
        <img
          src={props.style.photos[0].url}
          alt={
            "https://www.alterenterprise.com/wp-content/uploads/2014/02/Image-not-available_1.jpg"
          }
        />
      );
    }
  };
  return (
    <div
      className="productCard"
      onClick={() => props.handleCardClick(props.data.id)}
    >
      <button class="ui icon button" onClick={props.handleClick}>
        <i class="star outline icon"></i>
      </button>
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
