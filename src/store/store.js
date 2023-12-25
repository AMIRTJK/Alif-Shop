import { configureStore } from "@reduxjs/toolkit";
import home from "../reducers/Home/home";
import product from "../reducers/Product/product";

export const store = configureStore({
  reducer: {
    home: home,
    product: product,
  },
});
