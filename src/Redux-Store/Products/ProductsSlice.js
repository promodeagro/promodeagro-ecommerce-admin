import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchProductById, putProductById } from "Redux-Store/Products/ProductThunk";
import status from "Redux-Store/Constants";

const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    products: {
      status: null,
      data: [],
    },
    productDetail: {
      status: null,
      data: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch All Products
      .addCase(fetchProducts.pending, (state) => {
        state.products.status = status.IN_PROGRESS;
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.products.status = status.SUCCESS;
        state.products.data = payload.items; // Adjust based on actual payload structure
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
      // Put Product by ID
      .addCase(putProductById.pending, (state) => {
        state.productDetail.status = status.IN_PROGRESS;
      })
      .addCase(putProductById.fulfilled, (state, { payload }) => {
        state.productDetail.status = status.SUCCESS;
        state.productDetail.data = payload; // Assuming you want to update the product detail
      })
      .addCase(putProductById.rejected, (state) => {
        state.productDetail.status = status.FAILURE;
      });
  },
});

export default ProductsSlice.reducer;
