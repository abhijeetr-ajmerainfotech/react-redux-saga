import { combineReducers } from "redux";
import customReducer from "./user";

const rootReducer = combineReducers({
  user: customReducer,
});

export default rootReducer;
