import { createSlice } from '@reduxjs/toolkit';

function getItem(item) {
	try {
		JSON.parse(localStorage.getItem(item));
	} catch (error) {
		localStorage.setItem(item, JSON.stringify([]));
	}
	if (
		localStorage.getItem(item) &&
		Array.isArray(JSON.parse(localStorage.getItem(item)))
	)
		return JSON.parse(localStorage.getItem(item));
	else {
		localStorage.setItem(item, JSON.stringify([]));
		return [];
	}
}

const initialState = {
	wish: getItem('wish'),
	cart: getItem('cart'),
	total: 0,
};

export const cartStorageSlice = createSlice({
	name: 'cart&wish',
	initialState,
	reducers: {
		reset: (state) => {
			localStorage.clear();
			state.wish = getItem('wish');
			state.cart = getItem('cart');
			state.total = 0;
		},
		addWish: (state, action) => {
			const check = state.wish.find(
				(w) => w.product_id === action.payload.product_id
			);

			if (!check) state.wish.push(action.payload);

			localStorage.setItem('wish', JSON.stringify(state.wish));
		},
		removeWish: (state, action) => {
			state.wish = state.wish.filter(
				(w) => w.product_id !== action.payload.product_id
			);

			localStorage.setItem('wish', JSON.stringify(state.wish));
		},
		addCart: (state, action) => {
			console.log(action.payload);
			const existingItem = state.cart.find(
				(item) => item.product_id === action.payload.product_id
			);

			if (!existingItem) {
				state.cart.push(action.payload);
			} else {
				state.cart.forEach((cart) => {
					if (action.payload.product_id === cart.product_id) {
						cart.qte += action.payload.qte;
					}
				});
			}

			let total = 0;
			state.cart.forEach((item) => {
				total += item.qte * item.price;
			});
			state.total = total;

			localStorage.setItem('cart', JSON.stringify(state.cart));
		},
		addItem: (state, action) => {
			state.cart.forEach((cart) => {
				if (action.payload.id === cart.product_id) cart.qte++;
			});

			let total = 0;
			state.cart.forEach((item) => {
				total += item.qte * item.price;
			});
			state.total = total;

			localStorage.setItem('cart', JSON.stringify(state.cart));
		},
		removeItem: (state, action) => {
			state.cart.forEach((cart, index, object) => {
				if (action.payload.id === cart.product_id) {
					if (cart.qte === 1) {
						object.splice(index, 1);
					} else {
						cart.qte--;
					}
				}
			});

			let total = 0;
			state.cart.forEach((item) => {
				total += item.qte * item.price;
			});
			state.total = total;

			localStorage.setItem('cart', JSON.stringify(state.cart));
		},
		calculateTotal(state) {
			let total = 0;
			state.cart.forEach((item) => {
				total += item.qte * item.price;
			});
			state.total = total;
		},
		clearCarts(state) {
			localStorage.removeItem('cart');
			localStorage.removeItem('wish');
			state.wish = getItem('wish');
			state.cart = getItem('cart');
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	addWish,
	removeWish,
	addCart,
	removeItem,
	addItem,
	calculateTotal,
	reset,
	clearCarts,
} = cartStorageSlice.actions;

export default cartStorageSlice.reducer;
