import React from "react";
import ProductModal from "./ProductModal";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const Card = props => {
  let defaultImg =
    "https://www.alterenterprise.com/wp-content/uploads/2014/02/Image-not-available_1.jpg";

  let containStyles = () => {
    if (props.style !== undefined) {
      return props.style.photos[0].url === null ? (
        <img
          src={defaultImg}
          alt={"Loading"}
          // onClick={() => props.handleCardClick(props.data.id)}
        />
      ) : (
        <img
          src={props.style.photos[0].url}
          alt={"Loading"}
          // onClick={() => props.handleCardClick(props.data.id)}
        />
      );
    }
  };
  let renderPrice = () => {
    if (!props.style) {
        return <div >Loading</div>
    } else {
        if (props.style.sale_price === "0") {
            let productPrice = Number(props.style.original_price).toFixed(2);
            return <div >${productPrice}</div>
        } else {
            let original = <del>{Number(props.style.original_price).toFixed(2)}</del>
            let sale = <ins style={{color:"red", margin: "0 5px 0 0"}}>{Number(props.style.sale_price).toFixed(2)}</ins>

            return <div >${sale}  {original}</div>
        }
    }
}
  return (
    <div className="productCard">
      <Link to={`/${props.data.id}`}>
      {containStyles()}
      </Link>
      <ProductModal
        cardData={props.data}
        currentProduct={props.currentProduct}
      />
      <div className="cardInfo">
        <div>{props.data.category}</div>
        <div>{props.data.name}</div>
        {renderPrice()}
      </div>
    </div>
  );
};

export default Card;
