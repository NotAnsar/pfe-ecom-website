import React, { Fragment } from 'react';
import { Advantages } from '../components/Advantages/Advantages';
import { Slider } from '../components/Slider/Slider';

export const Home = () => {
  return (
    <Fragment>
      <Slider />
      <Advantages />
    </Fragment>
  );
};
