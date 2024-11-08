import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "Views/Config";
import { postLoginService } from "Services";

// Get the token from localStorage (where it's presumably stored)
const getToken = () => {
  const token = localStorage.getItem("user");
  return token ? JSON.parse(token).accessToken : null;
};

export const fetchOrders = createAsyncThunk(
  "orders/fetch",
  async ({ search = '', status = '', date = '' } = {}, { rejectWithValue }) => {
    try {
      console.log('Search term:', search); // Log the search term
      console.log('Status filter:', status); // Log the status filter
      console.log('Date filter:', date); // Log the date filter

      let queryParams = [];

      if (search) {
        queryParams.push(`search=${encodeURIComponent(search)}`);
      }

      if (status) {
        if (status === 'delivered') {
          queryParams.push(`status=${encodeURIComponent(status)}`);
          if (date) {
            queryParams.push(`date=${encodeURIComponent(date)}`);
          }
        } else {
          queryParams.push(`status=${encodeURIComponent(status)}`);
          if (date) {
            queryParams.push(`date=${encodeURIComponent(date)}`);
          }
        }
      } else if (date) {
        queryParams.push(`date=${encodeURIComponent(date)}`);
      }

      const url = `${config.FETCH_ORDERS}${queryParams.length > 0 ? `?${queryParams.join('&')}` : ''}`;
      console.log('Fetching orders with URL:', url);

      const token = getToken();  // Get the JWT token from localStorage
      const response = await postLoginService.get(url, {
        headers: {
          Authorization: `Bearer ${token}`  // Add the Authorization header
        }
      });

      console.log('Orders:', response);

      return { items: response.data.items };
    } catch (error) {
      console.error('API error:', error);
      return rejectWithValue(error.message);
    }
  }
);

export const ordersDetails = createAsyncThunk(
  "orders/details",
  async (id, { rejectWithValue }) => {
    try {
      if (!id) {
        throw new Error("Order ID is required");
      }
      const url = `${config.ORDERS_DETAILS.replace("{id}", id)}`;
      const token = getToken();
      const response = await postLoginService.get(url, {
        headers: {
          Authorization: `Bearer ${token}`  // Add the Authorization header
        }
      });
      console.log('Order detail:', response);
      return response.data;
    } catch (error) {
      console.error('API error:', error);
      return rejectWithValue(error.message);
    }
  }
);

export const fetchOrderStatus = createAsyncThunk(
  "orders/status",
  async (_, { rejectWithValue }) => {
    try {
      const url = config.ORDERS_STATUS;
      const token = getToken();
      const response = await postLoginService.get(url, {
        headers: {
          Authorization: `Bearer ${token}`  // Add the Authorization header
        }
      });
      console.log('Order status:', response);
      return response.data;
    } catch (error) {
      console.error('API error:', error);
      return rejectWithValue(error.message);
    }
  }
);

export const updateOrderStatus = createAsyncThunk(
  "orders/updateStatus",
  async (payload, { dispatch, getState, rejectWithValue }) => {
    const { ids, status } = payload;
    const requestUrl = `${config.UPDATE_ORDER_STATUS}${ids.join(',')}`;
    console.log('Request URL:', requestUrl);

    try {
      const token = getToken();
      const response = await fetch(requestUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`  // Add the Authorization header
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
      return rejectWithValue(error.message);
    }
  }
);

export const assignDeliveryBoyAndMoveToOnTheWay = createAsyncThunk(
  "orders/assignDeliveryBoy",
  async (payload, { dispatch, rejectWithValue }) => {
    const { orderIds, assignee, status } = payload;
    const requestUrl = `${config.ASSIGN_DELIVERY_BOY}${orderIds.join(',')}&assignee=${encodeURIComponent(assignee)}`;

    const requestBody = JSON.stringify({ assignee, status });

    console.log('Request URL:', requestUrl);
    console.log('Request Body:', requestBody);

    try {
      const token = getToken();
      const response = await fetch(requestUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`  // Add the Authorization header
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
      return rejectWithValue(error.message);
    }
  }
);

export const updateSingleOrderStatus = createAsyncThunk(
  "orders/updateStatus",
  async (payload, { dispatch, rejectWithValue }) => {
    const { ids, status } = payload;
    const requestUrl = `${config.UPDATE_SINGLE_ORDER_STATUS}${ids}`;
    console.log('Request URL:', requestUrl);

    try {
      const token = getToken();
      const response = await fetch(requestUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`  // Add the Authorization header
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
      return rejectWithValue(error.message);
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
      const token = getToken();
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`  // Add the Authorization header
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
