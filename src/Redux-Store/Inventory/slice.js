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
  },
});

export const { addProduct} = itemSlice.actions;

export default itemSlice.reducer;
