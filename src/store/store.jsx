import { configureStore } from '@reduxjs/toolkit';
import authentication from './authentication';
import cartStorageSlice from './cartSlice';
import productsSlice from './productsSlice';
import wishlistReducer from './wishListSlice';
// import shoplistReducer from './shopistSlice';

export const store = configureStore({
	reducer: {
		wishCard: wishlistReducer,
		products: productsSlice,
		storageSlice: cartStorageSlice,
		auth: authentication,
	},
});
