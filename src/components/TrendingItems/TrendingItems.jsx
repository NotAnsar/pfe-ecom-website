import React from 'react';
import { useSelector } from 'react-redux';
import ShoppingItem from './ShoppingItem';

import classes from './TrendingItems.module.scss';

const TrendingItems = () => {
  const trendingItems = useSelector((state) => state.products.trendingItems);

  return (
    <div className={classes.trendingSection}>
      <div className={classes.container}>
        <h1>Trending Items</h1>
        <div className={classes.itemContainer}>
          {trendingItems.map((p) => (
            <ShoppingItem
              key={p.product_id}
              id={p.product_id}
              image={p.image}
              name={p.name}
              price={p.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingItems;
