import React from "react";
import ReviewEntry from "./ReviewEntry";
import DropdownInline from "./Dropdown";
import ReviewModal from "./ReviewModal";

var Reviews = ({
  data,
  addTwo,
  count,
  markHelpful,
  reportReview,
  changeDropdown,
  productName,
  metaData,
  currentStarFilter
}) => {
  let filtered = [];
  let items = [];

  for (let i = 0; i < data.results.length; i++) {
    if (currentStarFilter.length > 0) {
      if (currentStarFilter.includes(data.results[i].rating))
        filtered.push(data.results[i]);
    } else filtered.push(data.results[i]);
  }

  for (let i = 0; i < count; i++) {
    if (filtered[i] === undefined) break;

    items.push(
      <ReviewEntry
        key={filtered[i].review_id}
        review={filtered[i]}
        addHelpful={markHelpful}
        report={reportReview}
      />
    );
  }

  return (
    <div className="reviewsParent">
      <div
        style={{ paddingLeft: "17px", paddingBottom: "1vh" }}
        className="reviewHeader"
      >
        There are {data.results.length} Reviews,{" "}
        <DropdownInline changeValue={changeDropdown} />
      </div>

      <div className="reviewEntryContainer">{items}</div>
      <div className="reviewButtons">
        {count < data.results.length ? (
          <button onClick={addTwo} class="ui secondary basic button">
            More Reviews
          </button>
        ) : (
          <div style={{ width: "15.7%" }}></div>
        )}

        <ReviewModal
          productName={productName}
          productId={data.product}
          metaData={metaData}
        />
      </div>
    </div>
  );
};

export default Reviews;
