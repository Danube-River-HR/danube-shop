import React from "react";
import { Progress } from "semantic-ui-react";

var RatingDiagram = ({ meta, changeStarFilter }) => {
  let yes = meta.recommended["1"];
  let no = meta.recommended["0"];

  if (yes === undefined) yes = 0;
  if (no === undefined) no = 0;

  const recommend = Math.round((yes / (no + yes)) * 100);

  let total = 0;
  if (meta.ratings["1"] !== undefined) total += meta.ratings["1"];
  if (meta.ratings["2"] !== undefined) total += meta.ratings["2"];
  if (meta.ratings["3"] !== undefined) total += meta.ratings["3"];
  if (meta.ratings["4"] !== undefined) total += meta.ratings["4"];
  if (meta.ratings["5"] !== undefined) total += meta.ratings["5"];

  return (
    <div>
      {total > 0 ? (
        <div className="ratingDiagramParent">
          <div className="recommendPercent">
            <span style={{ fontWeight: "bold" }}>{recommend} % </span> Of
            reviews recommend this product
          </div>
          <div className="ratingWrapper">
            <div>
              <Progress
                value={meta.ratings["5"] || 0}
                total={total}
                size="tiny"
                color="yellow"
                onClick={() => changeStarFilter(5)}
                className="ratingBar"
              >
                5 Stars ({meta.ratings["5"] || 0})
              </Progress>
              <div className="spaceHolder"></div>
              <Progress
                value={meta.ratings["4"] || 0}
                total={total}
                size="tiny"
                color="yellow"
                className="ratingBar"
                onClick={() => changeStarFilter(4)}
              >
                4 Stars ({meta.ratings["4"] || 0})
              </Progress>
              <div className="spaceHolder"></div>
              <Progress
                value={meta.ratings["3"] || 0}
                total={total}
                size="tiny"
                color="yellow"
                className="ratingBar"
                onClick={() => changeStarFilter(3)}
              >
                3 Stars ({meta.ratings["3"] || 0})
              </Progress>
              <div className="spaceHolder"></div>
              <Progress
                value={meta.ratings["2"] || 0}
                total={total}
                size="tiny"
                color="yellow"
                className="ratingBar"
                onClick={() => changeStarFilter(2)}
              >
                2 Stars ({meta.ratings["2"] || 0})
              </Progress>
              <div className="spaceHolder"></div>
              <Progress
                value={meta.ratings["1"] || 0}
                total={total}
                size="tiny"
                color="yellow"
                className="ratingBar"
                onClick={() => changeStarFilter(1)}
              >
                1 Star ({meta.ratings["1"] || 0})
              </Progress>
              <div className="spaceHolder"></div>
            </div>
          </div>
          <button onClick={() => console.log(meta)}>Button</button>
        </div>
      ) : (
        <div className="ratingDiagramParent">
          <div className="recommendPercent">
            <span style={{ fontWeight: "bold" }}>
              There are no ratings for this review. Be the first!{" "}
            </span>
          </div>
          <div className="ratingWrapper">
            <div>
              <Progress value={0} total={total} size="tiny">
                5 Stars
              </Progress>
              <div className="spaceHolder"></div>
              <Progress value={0} total={total} size="tiny">
                4 Stars
              </Progress>
              <div className="spaceHolder"></div>
              <Progress value={0} total={total} size="tiny">
                3 Stars
              </Progress>
              <div className="spaceHolder"></div>
              <Progress value={0} total={total} size="tiny">
                2 Stars
              </Progress>
              <div className="spaceHolder"></div>
              <Progress value={0} total={total} size="tiny">
                1 Star
              </Progress>
              <div className="spaceHolder"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RatingDiagram;
