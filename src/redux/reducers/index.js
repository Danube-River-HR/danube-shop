import { combineReducers } from "redux";
import {productDataReducer} from "./productDataReducer";
import {relatedProductsReducer} from "./relatedProductsReducer";
import {averageRatingReducer} from "./averageRatingReducer";
import {productStylesReducer} from "./productStylesReducer";
import {selectStyleReducer} from "./selectStyleReducer";

import {overallDataReducer} from "./overallDataReducer";

const rootReducer = combineReducers({
  currentProduct: productDataReducer,
  productStyles: productStylesReducer,
  relatedProducts: relatedProductsReducer,
  averageRating: averageRatingReducer,
  selectedStyle: selectStyleReducer,
  overallData: overallDataReducer
});

export default rootReducer;
