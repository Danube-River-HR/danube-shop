import React from "react";
import ProductCard from "./ProductCard";

const ProductCarousel = props => {
  // console.log(props.data);
  // console.log('styles', props.styles)
  let cards = props.data.map((card, index) => {
    return <ProductCard key={index} data={card} style={props.styles[index]} handleClick={props.handleClick}/>;
  });
  return (
    <div className="productCarousel">
      {cards}
      {/* <div className="productCard">sample</div>
      <div className="productCard">sample</div>
      <div className="productCard">sample</div>
      <div className="productCard">sample</div> */}
    </div>
  );
};

export default ProductCarousel;
