import {LOAD_STYLES} from '../constants';

/* This reducer should just get the id's of the related products. Then, 
we can use this array as props to iterate through and fetch data for each item
for your related-item carousel. */
export const productStylesReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_STYLES: {
      return action.payload;
    }
    default:
      return state;
  }
};