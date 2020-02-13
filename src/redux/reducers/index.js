import { combineReducers } from "redux";
import {selectStyleReducer} from "./selectStyleReducer";
import {overallDataReducer} from "./overallDataReducer";

const rootReducer = combineReducers({
  selectedStyle: selectStyleReducer,
  overallData: overallDataReducer
});

export default rootReducer;
