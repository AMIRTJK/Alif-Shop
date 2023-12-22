import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// GET QUERY

export const getCategories = createAsyncThunk(
  "home/getCategories",
  async function (_, rejectWithValue) {
    try {
      const { data } = await axios.get(
        "http://65.108.148.136:8072/Category/get-categories"
      );
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// API getProducts не рабочая, скоро исправят, вместо этого на время использую апишку SubCategory

export const getProducts = createAsyncThunk(
  "home/getProducts",
  async function (_, rejectWithValue) {
    try {
      const { data } = await axios.get(
        "http://65.108.148.136:8072/Product/get-products"
      );
      return data.data.products;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
