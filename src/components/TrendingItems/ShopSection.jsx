import React from 'react';

import { Fragment } from 'react/cjs/react.production.min';
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
