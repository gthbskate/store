import { createSlice } from "@reduxjs/toolkit";

const shopingCartSlice = createSlice({
  name: "shopingCart",
  initialState: [],
  reducers: {
    incrementProduct: (state, action) => {
      const existing = state.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    resetProduct: (state, action) => {
      const existing = state.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity = action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    deleteProduct: (state, action) => {
      return state.filter(item => item.id !== action.payload); 
    },
  },
});

export const { incrementProduct, resetProduct, deleteProduct } = shopingCartSlice.actions;

export default shopingCartSlice.reducer;
