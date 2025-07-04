// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "./slices/routeSlice";

const store = configureStore({
  reducer: {
    route: routeReducer,
  },
});

export default store;
