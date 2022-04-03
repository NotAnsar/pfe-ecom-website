import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './productsSlice';
import wishlistReducer from './wishListSlice';
// import shoplistReducer from './shopistSlice';

export const store = configureStore({
  reducer: {
    wishCard: wishlistReducer,
    products: productsSlice,
    // shopCard: shoplistReducer,
  },
});
