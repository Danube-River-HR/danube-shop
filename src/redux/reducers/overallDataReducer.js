import {LOAD_OVERALL_DATA} from "../constants";

export const overallDataReducer = (state = {}, action) => {
    switch (action.type) {
      case LOAD_OVERALL_DATA: {
        return action.payload;
      }
      default:
        return state;
    }
  };

  