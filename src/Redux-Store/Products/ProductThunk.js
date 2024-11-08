// Redux-Store/Products/ProductThunk.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "Views/Config";
import { postLoginService } from "Services";

// Helper function to get the access token from localStorage
const getAuthToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));  // Parse the user object from localStorage
  return user?.accessToken;  // Return the access token
}

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

    if (params?.subCategory) {
      queryParams.push(`subCategory=${encodeURIComponent(params.subCategory)}`);
    }

    if (params?.active) {
      queryParams.push(`active=${encodeURIComponent(params.active)}`);
    }

    if (params?.nextKey) {
      queryParams.push(`pageKey=${encodeURIComponent(params.nextKey)}`);
    }

    // Join the query parameters and append to the URL if there are any
    if (queryParams.length > 0) {
      url += `?${queryParams.join('&')}`;
    }

    const token = getAuthToken();  // Retrieve the access token
    const configHeaders = {
      headers: {
        'Authorization': `Bearer ${token}`,  // Add the Bearer token here
        'Content-Type': 'application/json',
      },
    };

    const response = await postLoginService.get(url, configHeaders);  // Pass configHeaders for Authorization
    console.log(response, "product response");
    console.log(url, "pro url");
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

// Fetch product details by ID
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id, { rejectWithValue }) => {
    try {
      const url = `${config.FETCH_PRODUCTS_DETAIL}/${id}`;
      const token = getAuthToken();  // Retrieve the access token
      const configHeaders = {
        headers: {
          'Authorization': `Bearer ${token}`,  // Add the Bearer token here
          'Content-Type': 'application/json',
        },
      };

      const response = await postLoginService.get(url, configHeaders);  // Pass configHeaders for Authorization
      console.log(response.data, "async specific data");
      return response.data;
    
    } catch (error) {
      console.error("API error:", error); // Log API error
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Put pricing by ID
export const putPricingById = createAsyncThunk(
  "products/putPricingById",
  async (pricingDataArray, { rejectWithValue }) => {
    try {
      const url = `${config.PUT_PRICING}/price`;
      const token = getAuthToken();  // Retrieve the access token
      const configHeaders = {
        headers: {
          'Authorization': `Bearer ${token}`,  // Add the Bearer token here
          'Content-Type': 'application/json',
        },
      };

      const response = await postLoginService.put(url, pricingDataArray, configHeaders);  // Pass configHeaders for Authorization
      console.log(response, "pricing array");
      return response.data;
     
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Put Active/Inactive Status
export const PutToggle = createAsyncThunk(
  "products/putActiveInactive",
  async ({ ids, active }, { rejectWithValue }) => {
    try {
      const url = `${config.PUT_ACTIVE_INACTIVE}`;
      const token = getAuthToken();  // Retrieve the access token
      const configHeaders = {
        headers: {
          'Authorization': `Bearer ${token}`,  // Add the Bearer token here
          'Content-Type': 'application/json',
        },
      };

      let isActive;
      if (typeof active === 'string') {
        isActive = active === 'inactive'; 
      } else {
        isActive = !active;  
      }

      const items = ids.map(id => ({ id, active: isActive }));

      console.log("Sending request to:", url);
      console.log("Payload:", items);

      const response = await postLoginService.put(url, items, configHeaders);  // Pass configHeaders for Authorization

      console.log(response.data, "async put of toggle successful");
      return response.data;
    } catch (error) {
      console.error("API error:", error);  // Log API error
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);
