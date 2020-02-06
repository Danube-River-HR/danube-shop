import React from "react";
import ReviewEntry from "./ReviewEntry";

var Reviews = ({ data }) => (
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
    {console.log(data)}
    {data.results.map(item => (
      <ReviewEntry key={item.review_id} review={item} />
    ))}
    <button>More Reviews</button>
    <button>Add a Review</button>
  </div>
);

export default Reviews;
