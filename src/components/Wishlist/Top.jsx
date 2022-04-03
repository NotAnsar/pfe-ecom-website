import React from 'react';
import { FiX } from 'react-icons/fi';

import classes from './WishList.module.scss';

const Top = ({ hideWishlist }) => {
  return (
    <div className={classes.top}>
      <h1>WishList</h1>
      <span onClick={hideWishlist}>
        <FiX />
      </span>
    </div>
  );
};

export default Top;
