import { createSlice } from "@reduxjs/toolkit";
import itemlist from "Redux-Store/Inventory/dummy/productsList.json";

const initialState = {
  items: {
    status: "SUCCESS",
    data: itemlist,
  },
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items.data.push(action.payload);
    },
    toggleStatus: (state, action) => {
      const item = state.items.data.find(p => p.itemCode === action.payload.itemCode);
      if (item) {
        item.status = item.status === "Active" ? "Inactive" : "Active";
      }
    },
  },
});

export const { addProduct, toggleStatus } = itemSlice.actions;

export default itemSlice.reducer;
