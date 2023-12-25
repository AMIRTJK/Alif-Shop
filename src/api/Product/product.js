import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//GET QUERY - Get Products From Cart

export const getProductsFromCart = createAsyncThunk(
  "product/getProductsFromCart",
  async function (_, { rejectWithValue }) {
    try {
      const { data } = await axios.get(
        "http://65.108.148.136:8072/Cart/get-products-from-cart"
      );
      console.log(data.data);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// // POST Add Product To Cart
// export const addProductToCard = createAsyncThunk(
//   "product/addProductToCard",
//   async function (clickedId, { dispatch, rejectWithValue }) {
//     try {
//       const { data } = await axios.post(
//         `http://65.108.148.136:8072/Cart/add-product-to-cart?id=${clickedId}`
//       );
//       dispatch(getProductsFromCart());
//       return data.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
