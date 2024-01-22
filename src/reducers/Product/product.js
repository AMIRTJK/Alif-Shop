import { createSlice } from "@reduxjs/toolkit";
import {
  //   addProductToCard,
  getProductsFromCart,
  addProductToCart,
  getProductById,
} from "../../api/Product/product";

const initialState = {
  loading: false,
  dataGetProductById: [],
  dataGetProductsFromCart: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Products By Id
    builder.addCase(getProductById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.dataGetProductById = action.payload;
    });
    builder.addCase(getProductById.rejected, (state, action) => {
      state.loading = false;
    });
    // Get Products From Cart
    builder.addCase(getProductsFromCart.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProductsFromCart.fulfilled, (state, action) => {
      state.loading = false;
      state.dataGetProductsFromCart = action.payload;
    });
    builder.addCase(getProductsFromCart.rejected, (state, action) => {
      state.loading = false;
    });
    // POST Add Product To Cart
    builder.addCase(addProductToCart.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addProductToCart.fulfilled, (state, action) => {
      state.loading = false;
      state.dataGetProductsFromCart = action.payload;
    });
    builder.addCase(addProductToCart.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
