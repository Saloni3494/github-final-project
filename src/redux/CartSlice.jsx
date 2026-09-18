import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array of { id, name, price, thumbnail, quantity }
  totalItems: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalItems += 1;
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        state.totalItems -= existingItem.quantity;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    },
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload; // amount can be 1 or -1
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        if (existingItem.quantity + amount > 0) {
          existingItem.quantity += amount;
          state.totalItems += amount;
        } else if (existingItem.quantity + amount === 0) {
          // If quantity reaches 0, remove the item entirely
          state.totalItems -= existingItem.quantity;
          state.items = state.items.filter(item => item.id !== id);
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
