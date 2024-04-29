// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/reducer';

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

export default store;