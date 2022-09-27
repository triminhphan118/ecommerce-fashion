import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const oldCart = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: oldCart,
  },
  reducers: {
    addCart: (state, action) => {
      const newItem = action.payload;
      const oldItem = state.items.find(
        (item) =>
          item.slug === newItem.slug &&
          item.color === newItem.color &&
          item.size === newItem.size
      );
      if (oldItem && Object.keys(oldItem).length > 0) {
        let newState = state.items.filter(
          (item) =>
            item.slug !== oldItem.slug &&
            item.size !== oldItem.size &&
            item.color === oldItem.color
        );

        state.items = [
          ...newState,
          {
            ...oldItem,
            quanty: oldItem.quanty + 1,
          },
        ];
      } else {
        state.items = [
          ...state.items,
          {
            id: uuidv4(),
            ...action.payload,
          },
        ];
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    },

    updateQuanty: (state, action) => {
      const payload = action.payload;
      const item = state.items.find((item) => item.id === payload.id);
      if (item && Object.keys(item).length > 0) {
        let newState = state.items.filter((item) => item.id !== payload.id);
        state.items = [
          ...newState,
          {
            ...item,
            ...payload,
          },
        ];

        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },

    deleteItem: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
  },
});

export default cartSlice.reducer;
export const { addCart, updateQuanty, deleteItem } = cartSlice.actions;
