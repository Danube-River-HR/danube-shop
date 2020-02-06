import React from "react";
import OutfitCard from "./OutfitCard";

const Carousel = props => {
  console.log(props.outfit)
  let cards = props.outfit.map((card, index) => {
    return <OutfitCard key={index} data={card.data} style={card.styles}/>;
  });
  return (
    <div className="productCarousel">
      {cards}
    </div>
  );
};

export default Carousel;