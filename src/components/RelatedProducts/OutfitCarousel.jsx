import React, { useState } from "react";
import OutfitCard from "./OutfitCard";
import ItemsCarousel from "react-items-carousel";

const Carousel = props => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 30;

  let cards = props.outfit.map((card, index) => {
    let defaultStyle = [];
    let hasDefault = false;
    card.style.results.forEach((style, index) => {
      if (style["default?"] === 1) {
        defaultStyle.push(style);
        hasDefault = true;
      }
    });
    if (!hasDefault) {
      defaultStyle.push(card.style.results[0]);
    }
    return (
      <OutfitCard
        key={index}
        data={card.data}
        style={defaultStyle[0]}
        rating={card.rating}
        removeClick={props.handleOutfitRemoveClick}
        handleCardClick={props.handleCardClick}
      />
    );
  });
  return (
    <div className="itemCarousel">
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        activePosition={"left"}
        numberOfCards={3.5}
        gutter={12}
        showSlither={true}
        leftChevron={<button>{"<"}</button>}
        rightChevron={<button>{">"}</button>}
        outsideChevron={true}
        chevronWidth={chevronWidth}
      >
        <div className="productCard">
          <button id="addOutfit" className="ui icon button" onClick={props.handleOutfitAddClick}>
            <i className="plus square outline icon"></i>
          </button>
          <div className="addOutfitText">Add to outfit</div>
        </div>
        {cards}
      </ItemsCarousel>
    </div>
  );
};

export default Carousel;
