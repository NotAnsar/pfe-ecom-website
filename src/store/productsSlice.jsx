import { createSlice } from '@reduxjs/toolkit';

export const fetchProductData = (url) => {
  return async (dispatch) => {
    async function fetchData() {
      const res = await fetch(url);

      if (!res.ok) throw Error('Could not fetch data');

      const data = await res.json();

      return data;
    }
    try {
      dispatch(products.actions.getproducts(await fetchData()));
    } catch (error) {}
  };
};

const initialState = {
  products: [],
  trendingItems: [],
  shopAll: [],
};

export const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getproducts: (state, action) => {
      state.products = action.payload;
      state.shopAll = state.products.slice(0, 6);
      state.trendingItems = state.products.slice(6, 9);
      console.log(state.products);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getproducts } = products.actions;

export default products.reducer;
