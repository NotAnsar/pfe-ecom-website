import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartIsShowing: null,
  wishIsShowing: null,
  menuIsShowing: null,
};

export const wishListSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    showCart: (state) => {
      state.cartIsShowing = true;
    },
    hideCart: (state) => {
      state.cartIsShowing = false;
    },
    toggleCart: (state) => {
      state.cartIsShowing = !state.isShowing;
    },
    showMenu: (state) => {
      state.menuIsShowing = true;
    },
    hideMenu: (state) => {
      state.menuIsShowing = false;
    },
    toggleMenu: (state) => {
      state.menuIsShowing = !state.isShowing;
    },
    showWish: (state) => {
      state.wishIsShowing = true;
    },
    hideWish: (state) => {
      state.wishIsShowing = false;
    },
    toggleWish: (state) => {
      state.wishIsShowing = !state.isShowing;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  showCart,
  hideCart,
  toggleCart,
  showWish,
  hideWish,
  toggleWish,
  showMenu,
  hideMenu,
  toggleMenu,
} = wishListSlice.actions;

export default wishListSlice.reducer;
