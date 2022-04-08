import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ProductNotFound.module.scss';

const ProductNotFound = () => {
  return (
    <div className={classes.container}>
      <h1>Product Not Found</h1>
      <p>The product you were looking for does not exist.</p>

      <Link className={classes.link} to='/shop'>
        Continue shopping
      </Link>
    </div>
  );
};

export default ProductNotFound;
