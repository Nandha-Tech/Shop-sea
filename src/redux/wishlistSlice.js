// src/redux/wishlistSlice.js
import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    toggleWishlist: (state, action) => {
      const product = action.payload;
      const exists = state.find((item) => item.id === product.id);
      if (exists) {
        return state.filter((item) => item.id !== product.id);
      } else {
        return [...state, product];
      }
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
