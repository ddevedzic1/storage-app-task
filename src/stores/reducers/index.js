import { combineReducers } from "redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import bucketsReducer from "./bucketsReducer";

const allReducers = combineReducers({
  buckets: bucketsReducer,
});

const store = createStore(allReducers, applyMiddleware(thunk));

export default store;
