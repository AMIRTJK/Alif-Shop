import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";

// GET QUERY

export const getCategories = createAsyncThunk(
  "home/getCategories",
  async function (_, rejectWithValue) {
    try {
      const { data } = await axiosRequest.get("Category/get-categories");
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// GET - getProducts

export const getProducts = createAsyncThunk(
  "home/getProducts",
  async function (_, rejectWithValue) {
    try {
      const { data } = await axiosRequest.get("Product/get-products");
      return data.data.products;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

