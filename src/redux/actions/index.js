import axios from "axios";
import {
  SELECT_STYLE,
  LOAD_OVERALL_DATA
} from "../constants/";

export const selectStyle = styleObj => {
  return {
    type: SELECT_STYLE,
    payload: styleObj
  }
};

export const fetchAllProductData = id => {
  return dispatch => {
    axios.get(`http://3.134.102.30/products/${id}`)
    .then(response => {
      let currentProduct = response.data;
      
      return Object.assign({}, {currentProduct: currentProduct});
    })
    .then(overallData => {
      return axios.get(`http://3.134.102.30/products/${id}/related`)
      .then(response => {
        let relatedProducts = response.data;
        return Object.assign(overallData, {relatedProducts: relatedProducts});
      });
    })
    .then(overallData => {
      return axios.get(`http://3.134.102.30/reviews/${id}/meta`)
      .then(response => {
        const ratings = Object.entries(response.data.ratings);
        let count = 0;
        let ratingCount = 0;
        ratings.forEach(review => {
          count += review[0] * review[1];
          ratingCount += review[1];
        });

        return Object.assign(overallData, {averageRating: (count / ratingCount).toFixed(2)})
      });
    })
    .then(overallData => {
      return axios.get(`http://3.134.102.30/products/${id}/styles`)
        .then(response => {
          let productStyles = response.data;
          return Object.assign(overallData, {productStyles: productStyles})
        });
    })
    .then(overallData => {
      dispatch({type: LOAD_OVERALL_DATA, payload: overallData});
    })
  }
}