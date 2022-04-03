import React from 'react';
import classes from './WishList.module.scss';

import ItemWish from './ItemWish';
import { useSelector } from 'react-redux';
const Middle = () => {
  const wishItem = useSelector((state) => state.products.trendingItems);

  return (
    <div className={classes.middle}>
      {wishItem.length === 0 ? (
        <p className={classes.empty}>Your WishList is currently empty.</p>
      ) : (
        wishItem.map((p) => (
          <ItemWish
            key={p.product_id}
            id={p.product_id}
            image={p.image}
            name={p.name}
            price={p.price}
          />
        ))
      )}
    </div>
  );
};

export default Middle;
