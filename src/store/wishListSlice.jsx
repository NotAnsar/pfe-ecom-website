import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShowing: null,
};

export const wishListSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    show: (state) => {
      state.isShowing = true;
    },
    hide: (state) => {
      state.isShowing = false;
    },
    toggle: (state) => {
      state.isShowing = !state.isShowing;
    },
  },
});

// Action creators are generated for each case reducer function
export const { show, hide, toggle } = wishListSlice.actions;

export default wishListSlice.reducer;
