import React from 'react';
import { FiX } from 'react-icons/fi';

import classes from './ShoppingBasket.module.scss';

const Top = ({ hideBasket }) => {
  return (
    <div className={classes.top}>
      <h1>Cart</h1>
      <span onClick={hideBasket}>
        <FiX />
      </span>
    </div>
  );
};

export default Top;
