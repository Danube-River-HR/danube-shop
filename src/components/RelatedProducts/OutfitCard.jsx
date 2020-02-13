import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const OutfitCard = props => {
  let containStyles = () => {
    // console.log(props.style)
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
    <div
      className="productCard"
      // onClick={() => props.handleCardClick(props.data.id)}
    >
      <button id="outfit-button"
        class="ui icon button"
        // onClick={() => props.removeClick(props.data)}
      >
        <i class="times circle outline icon"></i>
      </button>
      <Link to={`/${props.data.id}`}>
      {containStyles()}
      </Link>
      <div className="cardInfo">
        <div>{props.data.category}</div>
        <div>{props.data.name}</div>
        {/* <div>${props.data.default_price}</div> */}
        {renderPrice()}
      </div>
    </div>
  );
};

export default OutfitCard;
