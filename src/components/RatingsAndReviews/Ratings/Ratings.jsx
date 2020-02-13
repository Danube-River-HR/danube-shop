import React from "react";
import RatingDiagram from "./RatingDiagram";

var Ratings = ({ avg, metaData, changeStarFilter, currentStarFilter }) => {
  const starPercent = Math.round((avg / 5) * 100);
  return (
    <div className="ratingsParent">
      <div className="ratingsParentContainer">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="rating">{Number(avg).toFixed(1)}</div>
          <div className="star-ratings">
            <div className="fill-ratings" style={{ width: `${starPercent}%` }}>
              <p className="starSpan">★★★★★</p>
            </div>
            <div className="empty-ratings">
              <p className="starSpan">★★★★★</p>
            </div>
          </div>
        </div>

        <div className="ratingDiagramParent">
          <RatingDiagram
            meta={metaData}
            changeStarFilter={changeStarFilter}
            currentStarFilter={currentStarFilter}
          />
        </div>
      </div>
      <div className="sizingDiagram"></div>
    </div>
  );
};

export default Ratings;
