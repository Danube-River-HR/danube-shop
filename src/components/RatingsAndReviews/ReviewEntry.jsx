import React from "react";

var ReviewEntry = ({ review }) => (
  <div style={{ borderStyle: "solid" }}>
    <div style={{ backgroundColor: "gold" }}>✯{review.rating}</div>
    <div style={{ backgroundColor: "pink" }}>
      {review.reviewer_name + " "}
      {review.date.split("T")[0]}
    </div>
    <div style={{ backgroundColor: "lightGreen" }}>{review.summary}</div>
    <div style={{ backgroundColor: "lightBlue" }}>{review.body}</div>
    {review.recommend > 0 ? <div>I recommend this product</div> : null}
    {review.response !== null ? <div>{review.response}</div> : null}
    <div style={{ borderStyle: "dashed", borderColor: "red" }}>
      <div style={{ backgroundColor: "gold" }}>Helpful?</div>
      <div style={{ backgroundColor: "pink" }}>Yes (must be clickable)</div>
      <div style={{ backgroundColor: "lightBlue" }}>{review.helpfulness}</div>
    </div>
  </div>
);

export default ReviewEntry;
