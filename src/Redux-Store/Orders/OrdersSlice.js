import { createSlice } from "@reduxjs/toolkit";
import { fetchOrders, ordersDetails, fetchOrderStatus } from "Redux-Store/Orders/OrdersThunk";
import status from "Redux-Store/Constants";

const OrderSlice = createSlice({
  name: "orders",
  initialState: {
    ordersData: {
      status: null,
    },
    order_details: {
      status: null,
    },
    order_status: {
      status: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending.toString(), (state, action) => {
        return {
          ...state,
          ordersData: {
            status: status.IN_PROGRESS,
          },
        };
      })
      .addCase(fetchOrders.fulfilled.toString(), (state, { payload }) => {
        return {
          ...state,
          ordersData: {
            status: status.SUCCESS,
            data: payload,
          },
        };
      })
      .addCase(fetchOrders.rejected.toString(), (state, action) => {
        return {
          ...state,
          ordersData: {
            status: status.FAILURE,
          },
        };
      })
      .addCase(ordersDetails.pending.toString(), (state, action) => {
        return {
          ...state,
          order_details: {
            status: status.IN_PROGRESS,
          },
        };
      })
      .addCase(ordersDetails.fulfilled.toString(), (state, { payload }) => {
        return {
          ...state,
          order_details: {
            status: status.SUCCESS,
            data: payload,
          },
        };
      })
      .addCase(ordersDetails.rejected.toString(), (state, action) => {
        return {
          ...state,
          order_details: {
            status: status.FAILURE,
          },
        };
      })
      .addCase(fetchOrderStatus.pending.toString(), (state) => {
        state.order_status.status = status.IN_PROGRESS;
      })
      .addCase(fetchOrderStatus.fulfilled.toString(), (state, { payload }) => {
        state.order_status = {
          status: status.SUCCESS,
          data: payload,
        };
      })
      .addCase(fetchOrderStatus.rejected.toString(), (state) => {
        state.order_status.status = status.FAILURE;
      });
  },
});

export default OrderSlice.reducer;
