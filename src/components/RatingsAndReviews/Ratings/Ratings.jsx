import React from "react";
import RatingDiagram from "./RatingDiagram";

var Ratings = ({ avg, metaData, changeStarFilter }) => (
  <div className="ratingsParent" style={{ border: "solid" }}>
    <div className="ratingsParentContainer">
      <div className="rating">{avg}</div>
      <div className="ratingDiagramParent">
        <RatingDiagram meta={metaData} changeStarFilter={changeStarFilter} />
      </div>
    </div>
    <div className="sizingDiagram"></div>
  </div>
);

export default Ratings;
