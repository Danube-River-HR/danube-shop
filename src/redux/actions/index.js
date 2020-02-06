import axios from "axios";
import {
  LOAD_PRODUCT,
  RELATED_PRODUCTS,
  LOAD_STYLES,
  AVERAGE_RATING
} from "../constants/";

export const getProductData = id => {
  return dispatch => {
    axios.get(`http://3.134.102.30/products/${id}`).then(response => {
      dispatch({ type: LOAD_PRODUCT, payload: response.data });
    });
  };
};
export const getRelatedProducts = id => {
  return dispatch => {
    axios.get(`http://3.134.102.30/products/${id}/related`).then(response => {
      dispatch({ type: RELATED_PRODUCTS, payload: response.data });
    });
  };
};
export const getAverageRating = id => {
  return dispatch => {
    axios.get(`http://3.134.102.30/reviews/${id}/list`).then(response => {
      const reviewList = response.data.results;
      let count = 0;
      reviewList.forEach(review => {
        count += review.rating;
      });
      dispatch({ type: AVERAGE_RATING, payload: count / reviewList.length });
    });
  };
};
export const getProductStyles = id => {
  return dispatch => {
    axios.get(`http://3.134.102.30/products/${id}/styles`).then(response => {
      dispatch({ type: LOAD_STYLES, payload: response.data });
    });
  };
};
