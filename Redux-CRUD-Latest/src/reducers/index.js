import { combineReducers } from "redux";
import crudReducer from "./crudReducers";

export default combineReducers({
  list: crudReducer,
});
