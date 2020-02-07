import React from "react";
import ReviewEntry from "./ReviewEntry";
import DropdownInline from "./Dropdown";

var Reviews = ({
  data,
  addTwo,
  count,
  markHelpful,
  reportReview,
  changeDropdown
}) => {
  let items = [];
  for (let i = 0; i < count; i++) {
    if (data.results[i] === undefined) break;
    items.push(
      <ReviewEntry
        key={data.results[i].review_id}
        review={data.results[i]}
        addHelpful={markHelpful}
        report={reportReview}
      />
    );
  }

  return (
    <div
      // style={{ borderStyle: "solid", borderColor: "green" }}
      className="reviewsParent"
    >
      <div style={{ paddingLeft: "17px" }}>
        There are {data.results.length} Reviews,{" "}
        <DropdownInline changeValue={changeDropdown} />
      </div>

      <div className="reviewEntryContainer">{items}</div>
      <div className="reviewButtons">
        <button onClick={addTwo} class="ui basic button">
          More Reviews
        </button>
        <button class="ui basic button">Add a Review</button>
      </div>
    </div>
  );
};

export default Reviews;
