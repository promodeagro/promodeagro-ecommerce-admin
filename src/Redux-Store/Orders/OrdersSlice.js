import { createSlice } from "@reduxjs/toolkit";
import {
  fetchOrders,
  ordersDetails,
  ordersViewAttachments,
} from "Redux-Store/Orders/OrdersThunk";
import status from "Redux-Store/Constants";

const OrderSlice = createSlice({
  name: "orders",
  initialState: {
    ordersData: {
      status: null,
      data: null,
    },
    order_details: {
      status: null,
      data: null,
    },
    order_viewattachments: {
      status: null,
      data: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.ordersData.status = status.IN_PROGRESS;
      })
      .addCase(fetchOrders.fulfilled, (state, { payload }) => {
        state.ordersData.status = status.SUCCESS;
        state.ordersData.data = payload;
      })
      .addCase(fetchOrders.rejected, (state) => {
        state.ordersData.status = status.FAILURE;
      })
      .addCase(ordersDetails.pending, (state) => {
        state.order_details.status = status.IN_PROGRESS;
      })
      .addCase(ordersDetails.fulfilled, (state, { payload }) => {
        state.order_details.status = status.SUCCESS;
        state.order_details.data = payload;
      })
      .addCase(ordersDetails.rejected, (state) => {
        state.order_details.status = status.FAILURE;
      })
      .addCase(ordersViewAttachments.pending, (state) => {
        state.order_viewattachments.status = status.IN_PROGRESS;
      })
      .addCase(ordersViewAttachments.fulfilled, (state, { payload }) => {
        state.order_viewattachments.status = status.SUCCESS;
        state.order_viewattachments.data = payload;
      })
      .addCase(ordersViewAttachments.rejected, (state) => {
        state.order_viewattachments.status = status.FAILURE;
      });
  },
});

export default OrderSlice.reducer;
