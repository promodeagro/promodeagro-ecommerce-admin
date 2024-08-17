import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "Views/Config";
import { postLoginService } from "Services";


// Fetch products
export const fetchProducts = createAsyncThunk("products/fetch", async (params, { rejectWithValue }) => {
  try {
    let url = config.FETCH_PRODUCTS;
    const response = await postLoginService.get(url, params);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
