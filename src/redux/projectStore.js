import { createStore, combineReducers } from "redux";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({
  project: projectReducer,
});

const store = createStore(rootReducer);

export default store;
