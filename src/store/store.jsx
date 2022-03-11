import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './wishListSlice';
// import shoplistReducer from './shopistSlice';

export const store = configureStore({
  reducer: {
    wishCard: wishlistReducer,
    // shopCard: shoplistReducer,
  },
});
