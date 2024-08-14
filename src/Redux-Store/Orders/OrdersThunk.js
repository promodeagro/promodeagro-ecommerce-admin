import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "Views/Config";
import { postLoginService } from "Services";
export const fetchOrders = createAsyncThunk(
  "orders",
  async (params) => {
    try {
      let url = config.FETCH_ORDERS;
      const response = await postLoginService.get(url, params);
      console.log('API response:', response); 
      return response.data;
    } catch (error) {
      console.error('API error:', error); 
      return Promise.reject(error);
    }
  }
);


export const ordersDetails = createAsyncThunk(
    "orders/details",
    async (params) => {
      try {
        let url = config.ORDERS_DETAILS;
        const response = await postLoginService.get(url, params);
        console.log('API response:', response); 
        return response.data;
      } catch (error) {
        console.error('API error:', error); 
        return Promise.reject(error);
      }
    }
  );
  


  
