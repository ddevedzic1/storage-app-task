import { combineReducers } from "redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import bucketsReducer from "./bucketsReducer";
import locationsReducer from "./locationsReducer";
import filesReducer from "./filesReducer";

const allReducers = combineReducers({
  buckets: bucketsReducer,
  locations: locationsReducer,
  files: filesReducer,
});

const store = createStore(allReducers, applyMiddleware(thunk));

export default store;
