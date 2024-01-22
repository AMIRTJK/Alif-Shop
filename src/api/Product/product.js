import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";

// GET - getProductById

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async function (productId, rejectWithValue) {
    try {
      const { data } = await axiosRequest.get(
        `Product/get-product-by-id?id=${productId}`
      );
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//GET QUERY - Get Products From Cart

export const getProductsFromCart = createAsyncThunk(
  "product/getProductsFromCart",
  async function (_, { rejectWithValue }) {
    try {
      const { data } = await axiosRequest.get("Cart/get-products-from-cart");
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// POST Add Product To Cart
export const addProductToCart = createAsyncThunk(
  "product/addProductToCart",
  async function (clickedId, { dispatch, rejectWithValue }) {
    try {
      const { data } = await axios.post(
        `Cart/add-product-to-cart?id=${clickedId}`
      );
      dispatch(getProductsFromCart());
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
