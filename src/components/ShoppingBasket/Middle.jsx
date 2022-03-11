import React from 'react';
import classes from './ShoppingBasket.module.scss';

import Item from './Item';
const Middle = () => {
  return (
    <div className={classes.middle}>
      <Item
        title='Cigarettes Double-Sided Tee'
        price='$45.99'
        details='Maroon / XS'
        qte='2'
        img='https://cdn.shopify.com/s/files/1/0492/6983/3890/products/cigarettesfrontmockup_180x.png?v=1631311888'
      />

      <p className={classes.empty}>Your cart is currently empty.</p>
    </div>
  );
};

export default Middle;
