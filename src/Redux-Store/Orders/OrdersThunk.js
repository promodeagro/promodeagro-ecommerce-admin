import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "Views/Config";
import { postLoginService } from "Services";
import viewattachment from "Redux-Store/Orders/dummy/view_attachments.json";
export const fetchOrders = createAsyncThunk(
  "orders",
  async (params) => {
    try {
      let url = config.FETCH_ORDERS;
      const response = await postLoginService.get(url, params);
      console.log('API response:', response); // Log API response
      return response.data;
    } catch (error) {
      console.error('API error:', error); // Log API error
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
        console.log('API response:', response); // Log API response
        return response.data;
      } catch (error) {
        console.error('API error:', error); // Log API error
        return Promise.reject(error);
      }
    }
  );
  


  export const ordersViewAttachments = createAsyncThunk(
    "orders/viewattachment",
    async (params) => {
      try {
        let url = config.ORDERS_VIEWATTACHMENTS;
        const response = await postLoginService.get(url, params);
         return response.data
        return viewattachment;
      } catch (error) {
        return error
        return viewattachment;
      }
    }
  );
  
