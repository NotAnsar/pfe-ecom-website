import React, { Fragment, useEffect } from 'react';
import { Advantages } from '../components/Advantages/Advantages';
import Newsletter from '../components/Newsletter/Newsletter';
import { Slider } from '../components/Slider/Slider';
import ShopSection from '../components/TrendingItems/ShopSection';

export const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Fragment>
      <Slider />
      <Advantages />
      <ShopSection />
      <Newsletter />
    </Fragment>
  );
};
