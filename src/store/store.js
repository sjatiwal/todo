import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import { userLoginReducer } from "../reducer/userReducer";
import { todoTaskReducer } from "../reducer/todoReducer";
const reducers = combineReducers({
  user: userLoginReducer,
  task: todoTaskReducer,
});
const middleWare = [thunk];

let initialState = {
  task: {
    task: localStorage.getItem("TASK")
      ? JSON.parse(localStorage.getItem("TASK"))
      : [],
  },
};
console.log(initialState);
const store = configureStore(
  {
    reducer: reducers,
    preloadedState: initialState,
  },

  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
