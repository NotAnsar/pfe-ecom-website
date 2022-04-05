import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingItem from './ShoppingItem';

import classes from './TrendingItems.module.scss';
import { FiArrowRight } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const ShopAll = () => {
  const shopAll = useSelector((state) => state.products.shopAll);
  return (
    <div className={classes.trendingSection}>
      <div className={classes.container}>
        <div className={classes.shopAll}>
          <h1>Shop All</h1>
          <Link to='/shop' className={classes.viewAll}>
            View All
            <FiArrowRight />
          </Link>
        </div>

        <div className={classes.itemContainer}>
          {shopAll.map((p) => (
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

export default ShopAll;
