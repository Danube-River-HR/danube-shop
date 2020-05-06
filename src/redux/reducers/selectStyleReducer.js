import { SELECT_STYLE } from "../constants";

export const selectStyleReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_STYLE: {
      return action.payload;
    }
    default:
      return state;
  }
};
