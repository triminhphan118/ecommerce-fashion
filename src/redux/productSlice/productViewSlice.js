import { createSlice } from '@reduxjs/toolkit';

const productViewSlice = createSlice({
  name: 'viewProduct',
  initialState: {
    value: null,
  },
  reducers: {
    setItem: (state, action) => {
      console.log(action);
      state.value = action.payload;
    },

    removeItem: (state, action) => {
      state.value = null;
    },
  },
});

export default productViewSlice.reducer;
export const { setItem, removeItem } = productViewSlice.actions;
