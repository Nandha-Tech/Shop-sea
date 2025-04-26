// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlistSlice";
import cartReducer from "./cartSlice"; // if you have a cart

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer, // optional
  },
});
