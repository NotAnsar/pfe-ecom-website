import React, { Fragment } from 'react';
import { Advantages } from '../components/Advantages/Advantages';
import Newsletter from '../components/Newsletter/Newsletter';
import { Slider } from '../components/Slider/Slider';
import ShopAll from '../components/TrendingItems/ShopAll';
import ShopSection from '../components/TrendingItems/ShopSection';
import TrendingItems from '../components/TrendingItems/TrendingItems';

export const Home = () => {
  return (
    <Fragment>
      <Slider />
      <Advantages />
      <ShopSection />
      <Newsletter />
    </Fragment>
  );
};
