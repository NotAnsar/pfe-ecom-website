import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react/cjs/react.production.min';
import { fetchProductData } from '../../store/productsSlice';
import ShopAll from './ShopAll';
import TrendingItems from './TrendingItems';

const ShopSection = () => {
  return (
    <Fragment>
      <TrendingItems />
      <ShopAll />
    </Fragment>
  );
};

export default ShopSection;
