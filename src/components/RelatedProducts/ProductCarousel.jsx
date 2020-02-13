import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ItemsCarousel from "react-items-carousel";


const ProductCarousel = props => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 30;

  let cards = props.data.map((card, index) => {
    return (
      <div style={{}}>
        <ProductCard
          key={index}
          data={card}
          currentProduct={props.currentProduct}
          style={props.styles[index]}
          handleClick={props.handleClick}
          handleCardClick={props.handleCardClick}
        />
      </div>
    );
  });
  return (
    
    <div class="itemCarousel" style={{}}>
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
        {cards}
      </ItemsCarousel>
    </div>
  );
};

export default ProductCarousel;
