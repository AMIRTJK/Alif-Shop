import { configureStore } from "@reduxjs/toolkit";
import home from "../reducers/Home/home";

export const store = configureStore({
  reducer: {
    home: home,
  },
});
