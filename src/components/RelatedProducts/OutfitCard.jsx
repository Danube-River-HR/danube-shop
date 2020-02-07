import React from "react";

const OutfitCard = props => {
  let containStyles = () => {
    return props.style.photos[0].url !== null ? (
      <img src={props.style.photos[0].url} alt={"Loading"} />
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
      <button
        class="ui icon button"
        onClick={() => props.removeClick(props.data)}
      >
        <i class="times circle outline icon"></i>
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
