import React from "react";

const OutfitCard = props => {
  console.log(props.style, props.data)
  let outfit = {
    data: props.data,
    styles: props.style
  }
  let containStyles = () => {
    return props.style ? (
      <img src={props.style.photos[0].url} alt={"Missing Image"} />
    ) : (
      <div>Img Loading</div>
    );
  };
  return (
    <div className="productCard">
      <button class="ui icon button" onClick={() => props.handleClick(outfit)}>
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

export default OutfitCard;