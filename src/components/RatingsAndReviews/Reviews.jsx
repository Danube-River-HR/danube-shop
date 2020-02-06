import React from "react";
import ReviewEntry from "./ReviewEntry";

var Reviews = ({ data, addTwo, count }) => {
  let items = [];
  for (let i = 0; i < count; i++) {
    if (data.results[i] === undefined) break;
    items.push(
      <ReviewEntry key={data.results[i].review_id} review={data.results[i]} />
    );
  }

  return (
    <div style={{ borderStyle: "solid", borderColor: "green" }}>
      <h4>Reviews (seperate container)</h4>
      <div style={{ backgroundColor: "pink" }}>
        There's {data.count} Reviews, sorted by{" "}
      </div>
      <select>
        <option>Relevance</option>
        <option>Helpfulness</option>
        <option>Newest</option>
      </select>
      <div>{items}</div>
      <div onClick={addTwo}>More Reviews</div>
      <div>Add a Review</div>
    </div>
  );
};

export default Reviews;
