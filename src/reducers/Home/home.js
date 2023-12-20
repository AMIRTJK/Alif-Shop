import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getProducts } from "../../api/Home/home";

const initialState = {
  loadingCategories: true,
  loadingProducts: true,
  dataGetCategories: [],
  dataGetProducts: [],
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Categories
    builder.addCase(getCategories.pending, (state, action) => {
      state.loadingCategories = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loadingCategories = false;
      state.dataGetCategories = action.payload;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.loadingCategories = false;
    });
    // Get Products
    builder.addCase(getProducts.pending, (state, action) => {
      state.loadingProducts = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loadingProducts = false;
      state.dataGetProducts = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loadingProducts = false;
    });
  },
});

export const {} = homeSlice.actions;

export default homeSlice.reducer;
