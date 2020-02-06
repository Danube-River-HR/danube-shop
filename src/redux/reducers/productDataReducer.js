import { LOAD_PRODUCT } from "../constants";

// **** JOHN'S EDITS ****
// Since product data is just one big object, shouldn't our reducer
// simply swap the currentProduct state with a new object when user picks
// a new item?
export const productDataReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_PRODUCT: {
      return action.payload;
    }
    default:
      return state;
  }
};
