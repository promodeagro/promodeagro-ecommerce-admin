import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "Views/Config";
import { postLoginService } from "Services";
export const fetchOrders = createAsyncThunk(
  "orders",
  async (params) => {
    try {
      let url = config.FETCH_ORDERS;
      const response = await postLoginService.get(url, params);
      console.log('All orders:', response); 
      return response.data;
    } catch (error) {
      console.error('API error:', error); 
      return Promise.reject(error);
    }
  }
);

export const ordersDetails = createAsyncThunk(
  "orders/details",
  async (id) => {
    try {
      if (!id) {
        throw new Error("Order ID is required");
      }
      const url = `${config.ORDERS_DETAILS.replace("{id}", id)}`; // Replace placeholder with actual ID
      const response = await postLoginService.get(url);
      console.log('Order detail:', response);
      return response.data;
    } catch (error) {
      console.error('API error:', error);
      return Promise.reject(error);
    }
  }
);

export const fetchOrderStatus = createAsyncThunk(
  "orders/status",
  async () => {
    try {
      const url = config.ORDERS_STATUS;
      const response = await postLoginService.get(url);
      console.log('Order status:', response);
      return response.data;
    } catch (error) {
      console.error('API error:', error);
      return Promise.reject(error);
    }
  }
);

  
