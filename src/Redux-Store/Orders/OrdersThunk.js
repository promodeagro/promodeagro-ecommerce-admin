import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "Views/Config";
import { postLoginService } from "Services";

export const fetchOrders = createAsyncThunk(
  "orders/fetch",
  async () => {
    try {
      const url = config.FETCH_ORDERS;
      const response = await postLoginService.get(url);
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
      const url = `${config.ORDERS_DETAILS.replace("{id}", id)}`; 
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

export const updateOrderStatus = createAsyncThunk(
  "orders/updateStatus",
  async (payload, { dispatch, getState }) => {
    const { ids, status } = payload;
    const requestUrl = `${config.UPDATE_ORDER_STATUS}${ids.join(',')}`;
    console.log('Request URL:', requestUrl); 

    try {
      const response = await fetch(requestUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      console.log('Response Status:', response);

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('API Response:', result);    

      await dispatch(fetchOrders());

      return result;
    } catch (error) {
      console.error('Error updating order status:', error);
      throw error;
    }
  }
);

export const assignDeliveryBoyAndMoveToOnTheWay = createAsyncThunk(
  "orders/assignDeliveryBoy",
  async (payload, { dispatch }) => {
    const { orderIds, assignee, status } = payload; 
    const requestUrl = `${config.ASSIGN_DELIVERY_BOY}${orderIds.join(',')}&assignee=${encodeURIComponent(assignee)}`;

    // Include the assignee and status in the request body as well
    const requestBody = JSON.stringify({ assignee, status });

    console.log('Request URL:', requestUrl);
    console.log('Request Body:', requestBody);

    try {
      const response = await fetch(requestUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestBody, 
      });

      console.log('Response Status:', response);

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('API Response:', result);

      await dispatch(fetchOrders());

      return result;
    } catch (error) {
      console.error('Error assigning delivery boy:', error);
      throw error;
    }
  }
);

export const updateSingleOrderStatus = createAsyncThunk(
  "orders/updateStatus",
  async (payload, { dispatch, getState }) => {
    const { ids, status } = payload;
    const requestUrl = `${config.UPDATE_SINGLE_ORDER_STATUS}${ids}`;
    console.log('Request URL:', requestUrl); 

    try {
      const response = await fetch(requestUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      console.log('Response Status:', response);

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('API Response:', result);    

      await dispatch(ordersDetails(ids));
      return result;
    } catch (error) {
      console.error('Error updating order status:', error);
      throw error;
    }
  }
);

export const assignDeliveryBoyAndMoveToOnTheWayforsingleorder = createAsyncThunk(

  'orders/assignDeliveryBoyAndMoveToOnTheWayforsingleorder',
  async ({ ids, assignee, status }, { rejectWithValue, dispatch }) => {
    try {
      console.log('Assigning delivery boy with parameters:', { ids, assignee, status });

      const url = `${config.ASSIGN_DELIVERY_BOY_SINGLEORDER}${ids.join(',')}&assignee=${encodeURIComponent(assignee)}`;
      console.log('Request URL:', url);
      const response = await fetch(url, {        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ assignee, status }),
      });

      const data = await response.json();
      console.log('API Response:', data);

      await dispatch(ordersDetails(ids));
      if (!response.ok) {
        throw new Error(data.message || 'Failed to assign delivery boy');
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchFilteredOrders = createAsyncThunk(
  'orders/fetchFilteredOrders',
  async ({ pageKey = '', status }, { rejectWithValue }) => {
    try {
      // Construct the URL with pageKey
      let url = `${config.FETCH_FILTER_ORDERS}?pageKey=${encodeURIComponent(pageKey)}&status=${status}`;
      console.log('Parameters:', { pageKey, status });
      console.log('Fetching filtered orders with URL:', url);

      // Fetch the data
      const response = await fetch(url);

      // Check if the response is ok (status in the range 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the JSON data
      const data = await response.json();

      // Log the entire fetched data
      console.log('Fetched data:', data);

      // Filter and log the orders with the selected status
      const filteredOrders = data.items.filter(order => order.orderStatus === status);
      console.log('Filtered orders with status:', status, filteredOrders);

      // Return the items (adjust based on your API response structure)
      return data.items;
    } catch (error) {
      // Log the error for debugging purposes
      console.error('Error fetching filtered orders:', error.message);
      console.error('Parameters causing error:', { pageKey, status });

      // Return the error message as a rejected value
      return rejectWithValue(error.message);
    }
  }
);

