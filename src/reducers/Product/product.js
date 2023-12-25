import { createSlice } from "@reduxjs/toolkit";
import {
  //   addProductToCard,
  getProductsFromCart,
} from "../../api/Product/product";

const initialState = {
  loading: false,
  dataGetProductsFromCart: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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
    // // POST Add Product To Cart
    // builder.addCase(addProductToCard.pending, (state, action) => {
    //   state.loading = true;
    // });
    // builder.addCase(addProductToCard.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.dataGetProductsFromCart = action.payload;
    // });
    // builder.addCase(addProductToCard.rejected, (state, action) => {
    //   state.loading = false;
    // });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
