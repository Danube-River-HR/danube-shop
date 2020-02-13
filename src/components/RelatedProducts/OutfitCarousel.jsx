import React, {useState} from "react";
import OutfitCard from "./OutfitCard";
import ItemsCarousel from "react-items-carousel";

// {data: {…}, style: {…}}
// data: {id: 1, name: "Camo Onesie", slogan: "Blend in to your crowd", description: "The So Fatigues will wake you up and fit you in. T…you blending in to even the wildest surroundings.", category: "Jackets", …}
// style:
// product_id: "1"
// results: Array(6)
// 0: {style_id: 1, name: "Forest Green & Black", original_price: "140", sale_price: "0", default?: 1, …}
// 1: {style_id: 2, name: "Desert Brown & Tan", original_price: "140", sale_price: "0", default?: 0, …}
// 2: {style_id: 3, name: "Ocean Blue & Grey", original_price: "140", sale_price: "100", default?: 0, …}
// 3: {style_id: 4, name: "Digital Red & Black", original_price: "140", sale_price: "0", default?: 0, …}
// 4: {style_id: 5, name: "Sky Blue & White", original_price: "140", sale_price: "100", default?: 0, …}
// 5: {style_id: 6, name: "Dark Grey & Black", original_price: "170", sale_price: "0", default?: 0, …}
// length: 6

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
        removeClick={props.handleOutfitRemoveClick}
        handleCardClick={props.handleCardClick}
      />
    );
  });
  return (
    // <div className="productCarousel">
    //   <div className="productCard">
    //     <button class="ui icon button" onClick={props.handleOutfitAddClick}>
    //       <i class="plus square outline icon"></i>
    //     </button>
    //     Add to outfit
    //   </div>
    //   {cards}
    // </div>
    <div class="itemCarousel">
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
          <button class="ui icon button" onClick={props.handleOutfitAddClick}>
            <i class="plus square outline icon"></i>
          </button>
          Add to outfit
        </div>
        {cards}
      </ItemsCarousel>
    </div>
  );
};

export default Carousel;
