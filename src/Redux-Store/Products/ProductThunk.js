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
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
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
      // console.log(response.data, "async");
      return response.data;
    } catch (error) {
      console.error("API error:", error); // Log API error
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

// Put product details by ID
export const putProductById = createAsyncThunk(
  "products/putProductById",
  async ({ id, productData }, { rejectWithValue }) => {
    try {
      const url = `${config.PUT_PRODUCTS_DETAIL}/${id}`;

      const response = await postLoginService.put(url, productData);
      console.log(response.data, "async put successful");
      return response.data;
    } catch (error) {
      console.error("API error:", error); // Log API error
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

// Put pricing details by ID
export const putPricingById = createAsyncThunk(
  "products/putPricingById",
  async ({ id, pricingData }, { rejectWithValue }) => {
    try {
      const url = `${config.PUT_PRICING}/${id}/price`;

      // Convert string values to numbers
      const formattedPricingData = {
        compareAt: parseFloat(pricingData.compareAt) || 0, // Default to 0 if conversion fails
        onlineStorePrice: parseFloat(pricingData.onlineStorePrice) || 0 // Default to 0 if conversion fails
      };

      // Log the request data to ensure correctness
      console.log('Sending PUT request to:', url);
      console.log('Payload:', formattedPricingData);

      // Make the PUT request with the formatted pricing data
      const response = await postLoginService.put(url, formattedPricingData);

      console.log(response.data, "Pricing details updated successfully");
      return response.data;
    } catch (error) {
      console.error("API error:", error); // Log API error
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);


// Put Active/Inactive Status
export const PutToggle = createAsyncThunk(
  "products/putActiveInactive",
  async ({ id, active }, { rejectWithValue }) => {
    try {
      const url = `${config.PUT_ACTIVE_INACTIVE}`;
      // Log the payload to verify its structure
      console.log("Sending request to:", url);
      console.log("Payload:", { id, active });

      // Ensure `isActive` is a boolean value
      const response = await postLoginService.put(url, { id, active });

      console.log(response.data, "async put of toggle successful");
      return response.data;
    } catch (error) {
      console.error("API error:", error); // Log API error
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

