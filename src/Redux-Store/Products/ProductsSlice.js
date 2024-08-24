import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchProductById, PutToggle,putPricingById } from "Redux-Store/Products/ProductThunk";
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
  reducers: {
    toggleStatus: (state, action) => {
      const product = state.products.data.find(p => p.itemCode === action.payload.itemCode);
      if (product) {
        product.status = product.status === "Active" ? "Inactive" : "Active";
      }
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
        state.products.data = payload.items || []; // Ensure `items` exists in payload
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
      // .addCase(putProductById.pending, (state) => {
      //   state.productDetail.status = status.IN_PROGRESS;
      // })
      // .addCase(putProductById.fulfilled, (state, { payload }) => {
      //   state.productDetail.status = status.SUCCESS;
      //   // Update the specific product in the `products.data` array
      //   state.products.data = state.products.data.map((product) =>
      //     product.id === payload.id ? payload : product
      //   );
      //   state.productDetail.data = payload; // Update product detail
      // })
      // .addCase(putProductById.rejected, (state) => {
      //   state.productDetail.status = status.FAILURE;
      // })
      // Put Pricing by ID
      .addCase(putPricingById.pending, (state) => {
        state.productDetail.status = status.IN_PROGRESS;
      })
      .addCase(putPricingById.fulfilled, (state, { payload }) => {
        state.productDetail.status = status.SUCCESS;
        // Update the specific product in the `products.data` array
        state.products.data = state.products.data.map((product) =>
          product.id === payload.id ? payload : product
        );
        state.productDetail.data = payload; // Update product detail
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
export const { toggleStatus } = ProductsSlice.actions;
export default ProductsSlice.reducer;
