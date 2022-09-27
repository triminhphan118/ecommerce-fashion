import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from './cartSlice/cartSlice';
import productViewSlice from './productSlice/productViewSlice';
const reducer = combineReducers({
  viewProduct: productViewSlice,
  cart: cartSlice,
});

export default reducer;
