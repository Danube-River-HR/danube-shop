import {RELATED_PRODUCTS} from '../constants';

/* This reducer should just get the id's of the related products. Then, 
we can use this array as props to iterate through and fetch data for each item
for your related-item carousel. */
export const relatedProductsReducer = (state = [], action) => {
  switch (action.type) {
    case RELATED_PRODUCTS: {
      return action.payload;
    }
    default:
      return state;
  }
};