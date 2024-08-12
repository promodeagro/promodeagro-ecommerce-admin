import { configureStore } from "@reduxjs/toolkit";
import CustomersReducer from "Redux-Store/Customers/CustomersSlice";
import OrdersReducer from "Redux-Store/Orders/OrdersSlice"; // Corrected import name
import ProductsSlice from "./Products/ProductsSlice";
import itemSlice from "Redux-Store/Inventory/inventorySlice/slice";
import orderSlice from "Redux-Store/Inventory/orderSlice/Slice"
const store = configureStore({
  reducer: {
    orders: OrdersReducer,
    customers: CustomersReducer,
    products: ProductsSlice,
    items: itemSlice,
    ordersInInventory :orderSlice,
  },
});

export default store;
