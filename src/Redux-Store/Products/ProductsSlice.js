import { createSlice } from "@reduxjs/toolkit";
import {
  fetchProducts,
  fetchProductById,
  PutToggle,
  putPricingById,
} from "Redux-Store/Products/ProductThunk";
import status from "Redux-Store/Constants";

const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    products: {
      status: null,
      data: [],
      nextKey: null,
      hasMore: true,
    },
    productDetail: {
      status: null,
      data: null,
    },
  },
  reducers: {
    toggleStatus: (state, action) => {
      const product = state.products.data.find(
        (p) => p.id === action.payload.id // Match with id instead of itemCode
      );
      if (product) {
        // Optimistically update the active status
        product.active = !product.active; // Toggle the active state
      }
    },
    resetProducts: (state) => {
      state.products.data = [];
      state.products.nextKey = null;
      state.products.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch All Products
      .addCase(fetchProducts.pending, (state) => {
        state.products.status = status.IN_PROGRESS;
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.products.status = status.SUCCESS;

        // Check if there is an existing nextKey and append data accordingly
        if (payload.items) {
          state.products.data = state.products.hasMore
            ? [...state.products.data, ...payload.items] // Append new items
            : payload.items; // For the first load or if hasMore is false
        }

        // Update nextKey and hasMore
        state.products.nextKey = payload.nextKey || null;
        state.products.hasMore = !!state.products.nextKey; // Set hasMore based on nextKey
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.products.status = status.FAILURE;
      })
      // Fetch Product by ID
      .addCase(fetchProductById.pending, (state) => {
        state.productDetail.status = status.IN_PROGRESS;
      })
      .addCase(fetchProductById.fulfilled, (state, { payload }) => {
        state.productDetail.status = status.SUCCESS;
        state.productDetail.data = payload;
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.productDetail.status = status.FAILURE;
      })
      // Put Pricing by ID
      .addCase(putPricingById.pending, (state) => {
        state.productDetail.status = status.IN_PROGRESS;
      })
      .addCase(putPricingById.fulfilled, (state, { payload }) => {
        state.productDetail.status = status.SUCCESS;
        state.products.data = state.products.data.map((product) =>
          product.id === payload.id ? payload : product
        );
        state.productDetail.data = payload;
      })
      .addCase(putPricingById.rejected, (state) => {
        state.productDetail.status = status.FAILURE;
      })
      // Toggle Product Active/Inactive Status
      .addCase(PutToggle.pending, (state) => {
        state.products.status = status.IN_PROGRESS;
      })
      .addCase(PutToggle.fulfilled, (state, { payload }) => {
        state.products.status = status.SUCCESS;
        // Update the specific product in the `products.data` array
        state.products.data = state.products.data.map((product) =>
          product.id === payload.id ? { ...product, active: payload.isActive } : product
        );
      })
      .addCase(PutToggle.rejected, (state) => {
        state.products.status = status.FAILURE;
      });
  },
});

export const { toggleStatus, resetProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;
