import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "Views/Config";
import { postLoginService } from "Services";

// Fetch all products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (params, { rejectWithValue }) => {
    try {
      const url = config.FETCH_PRODUCTS;
      const response = await postLoginService.get(url, { params });
      console.log(response, "products api");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Fetch product details by ID
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id, { rejectWithValue }) => {
    try {
      const url = `${config.FETCH_PRODUCTS_DETAIL}/${id}`;
      const response = await postLoginService.get(url);
      console.log(response.data, "async");
      return response.data;
    } catch (error) {
      console.error('API error:', error); // Log API error
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Put product details by ID
export const putProductById = createAsyncThunk(
  "products/putProductById",
  async ({ id, productData }, { rejectWithValue }) => {
    try {
      const url = `${config.FETCH_PRODUCTS_DETAIL}/${id}`;
      const response = await postLoginService.put(url, productData);
      console.log(response.data, "async put");
      return response.data;
    } catch (error) {
      console.error('API error:', error); // Log API error
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);
