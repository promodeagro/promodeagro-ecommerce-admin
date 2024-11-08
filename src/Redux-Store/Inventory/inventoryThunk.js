import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "Views/Config";
import { postLoginService } from "Services";

// Helper function to get the token from localStorage
const getToken = () => {
  const token = localStorage.getItem("user");
  return token ? JSON.parse(token).accessToken : null;
};

// Fetch products
export const fetchProducts = createAsyncThunk("products/fetch", async (params, { rejectWithValue }) => {
  try {
    let url = config.FETCH_PRODUCTS;

    // Initialize an array to hold query parameters
    let queryParams = [];

    // Add search term to query parameters if provided
    if (params?.search) {
      queryParams.push(`search=${encodeURIComponent(params.search)}`);
    }

    // Add category to query parameters if provided
    if (params?.category) {
      queryParams.push(`category=${encodeURIComponent(params.category)}`);
    }

    // Add subCategory to query parameters if provided
    if (params?.subCategory) {
      queryParams.push(`subCategory=${encodeURIComponent(params.subCategory)}`);
    }

    // Join the query parameters and append to the URL if there are any
    if (queryParams.length > 0) {
      url += `?${queryParams.join('&')}`;
    }

    const token = getToken();  // Retrieve the JWT token
    const response = await postLoginService.get(url, {
      headers: {
        Authorization: `Bearer ${token}`  // Add Authorization header with the token
      }
    });

    return response.data;  // Return the fetched data
  } catch (error) {
    console.error('API error:', error);  // Log error to console
    return rejectWithValue(error.response ? error.response.data : error.message);  // Reject with error message
  }
});
