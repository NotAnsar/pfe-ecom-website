import React from 'react';
import classes from './ShoppingBasket.module.scss';

import Item from './Item';

const Middle = ({ cart }) => {
  return (
    <div className={classes.middle}>
      {cart.length === 0 ? (
        <p className={classes.empty}>Your cart is currently empty.</p>
      ) : (
        cart.map((p) => (
          <Item
            key={p.product_id}
            id={p.product_id}
            image={p.image}
            name={p.name}
            price={p.price}
            qte='2'
          />
        ))
      )}
    </div>
  );
};

export default Middle;
