import React from "react";
import ProductCard from "./ProductCard";

const ProductCarousel = props => {
  let cards = props.data.map((card, index) => {
    return <ProductCard key={index} data={card} currentProduct={props.currentProduct} style={props.styles[index]} handleClick={props.handleClick} handleCardClick={props.handleCardClick}/>;
  });
  return (
    <div className="productCarousel">
      {cards}
    </div>
  );
};

export default ProductCarousel;
