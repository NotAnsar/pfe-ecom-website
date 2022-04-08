import React, { useEffect } from 'react';

import ShopItem from '../TrendingItems/ShoppingItem';

import classes from './ShopItem.module.scss';
import { useSelector } from 'react-redux';
import ShopHeader from './ShopHeader';
import Filter from './Filter';

const ShopAll = () => {
  const { products, brands, categories } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className={classes.trendingSection}>
      <div className={classes.container}>
        <ShopHeader />
        <div className={classes.shopContainer}>
          <Filter brands={brands} categories={categories} />
          {(!products || brands.length === 0 || categories.length === 0) && (
            <div className='loading'>
              <img src='./images/loading.gif' />
            </div>
          )}
          <div className={classes.itemContainer}>
            {products.map((p) => (
              <ShopItem
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
    </div>
  );
};

export default ShopAll;
