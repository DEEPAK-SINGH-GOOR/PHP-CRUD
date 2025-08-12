import { createStore } from "redux";
import reducers from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    counter: reducers,
  },
});

export default store;
