import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "../slice/slice.jsx";

export const store = configureStore({
  reducer: {
    Stocks: stockReducer,
  },
});
