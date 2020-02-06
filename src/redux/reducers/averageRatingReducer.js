import { AVERAGE_RATING } from "../constants";

// **** JOHN'S EDITS ****
// Since product data is just one big object, shouldn't our reducer
// simply swap the currentProduct state with a new object when user picks
// a new item?
export const averageRatingReducer = (state = null, action) => {
  switch (action.type) {
    case AVERAGE_RATING: {
      return action.payload;
    }
    default:
      return state;
  }
};
