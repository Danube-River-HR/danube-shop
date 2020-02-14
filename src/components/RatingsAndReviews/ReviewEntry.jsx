import React from "react";
import { Image } from "semantic-ui-react";
import PictureModal from "./PictureModal";

var ReviewEntry = ({ review, addHelpful, report }) => {
  const starPercent = (review.rating / 5) * 100;

  return (
    <div style={{ borderStyle: "nothing" }} className="reviewEntryParent">
      <div className="ratingAndUser">
        <div className="star-ratings" style={{ fontSize: "120%", height: "25px", bottom: "6px" }}>
          <div className="fill-ratings" style={{ width: `${starPercent}%` }}>
            <p className="starSpan">★★★★★</p>
          </div>
          <div className="empty-ratings">
            <p className="starSpan">★★★★★</p>
          </div>
        </div>

        <div>
          {review.reviewer_name + " "}, {review.date.split("T")[0]}
        </div>
      </div>

      <div className="reviewSummary">{review.summary}</div>
      <div className="reviewBody">{review.body}</div>
      {review.photos.length > 0 ? (
        <Image.Group size="small" style={{ cursor: "zoom-in" }}>
          {review.photos.map(pic => (
            <PictureModal key={pic.url} url={pic.url} />
          ))}
        </Image.Group>
      ) : null}
      {review.recommend > 0 ? (
        <div style={{ paddingBottom: "20px", fontStyle: "italic" }}>
          {" "}
          ✓ I recommend this product
        </div>
      ) : null}
      {review.response !== "null" ? <div>{review.response}</div> : null}
      <div className="helpfulParent">
        <div className="helpfulWord">Helpful?</div>
        <div className="yesButton" onClick={() => addHelpful(review.review_id)}>
          Yes
        </div>
        <div className="helpfulCount">({review.helpfulness})</div>
        <div style={{ paddingLeft: "10px" }}>|</div>
        <div className="reportButton" onClick={() => report(review.review_id)}>
          Report
        </div>
      </div>

      <p
        style={{
          fontWeight: "lighter",
          color: "darkgray",
          maxWidth: "maxContent"
        }}
      >
        ________________________________________________________________________________________________________________________________
      </p>
    </div>
  );
};

export default ReviewEntry;
