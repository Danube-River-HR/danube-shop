import React from "react";

const Card = props => {
  let containStyles = () => {
    return props.style ? (
      <img src={props.style.photos[0].url} alt={"Missing img"} />
    ) : (
      <img
        src={
          "https://www.alterenterprise.com/wp-content/uploads/2014/02/Image-not-available_1.jpg"
        }
        alt={"Loading"}
      />
    );
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
