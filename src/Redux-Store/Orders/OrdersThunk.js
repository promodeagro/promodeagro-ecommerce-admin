import { createAsyncThunk } from "@reduxjs/toolkit";
// import config from "Views/Config"; // If needed for other configurations
import { postLoginService } from "Services";

// Define the base URL
const BASE_URL = "https://09ubwkjphb.execute-api.us-east-1.amazonaws.com";

// Define API endpoints
const FETCH_ORDERS_ENDPOINT = "/order"; // Adjust according to your API structure
const ORDERS_DETAILS_ENDPOINT = "/orders/details"; // Adjust according to your API structure
const ORDERS_VIEWATTACHMENTS_ENDPOINT = "/orders/viewattachments"; // Adjust according to your API structure

export const fetchOrders = createAsyncThunk(
  "orders",
  async (params) => {
    try {
      const url = `${BASE_URL}${FETCH_ORDERS_ENDPOINT}`;
      const response = await postLoginService.get(url, params);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch orders:", error);
      return []; // Handle error case, you can return default data or empty array
    }
  }
);

export const ordersDetails = createAsyncThunk(
  "orders/details",
  async (params) => {
    try {
      const url = `${BASE_URL}${ORDERS_DETAILS_ENDPOINT}`;
      const response = await postLoginService.get(url, params);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch order details:", error);
      return {}; 
    }
  }
);

export const ordersViewAttachments = createAsyncThunk(
  "orders/viewattachment",
  async (params) => {
    try {
      const url = `${BASE_URL}${ORDERS_VIEWATTACHMENTS_ENDPOINT}`;
      const response = await postLoginService.get(url, params);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch view attachments:", error);
      return []; // Handle error case, you can return default data or empty array
    }
  }
);