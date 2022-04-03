import React from 'react';
import classes from './ShopItem.module.scss';

const ShopHeader = () => {
  return (
    <div className={classes.shopAll}>
      <h1>Shop All</h1>
      <div className={classes.sortBy}>
        <div className={classes.sortBy}>
          <label htmlFor='sort'>Sort By</label>
          <select name='sort' defaultValue={'default'} className={classes.sort}>
            <option value='default'>Default</option>
            <option value='AtoZ'>Name A-Z</option>
            <option value='ZtoA'>Name Z-A</option>
            <option value='croi'>Price (Low to High)</option>
            <option value='decroi'>Price (High to Low)</option>
          </select>
        </div>
        <div className={classes.sortBy}>
          <label htmlFor='show'>Show</label>
          <select name='show' className={classes.show} defaultValue={'9'}>
            <option value='6'>6</option>
            <option value='9'>9</option>
            <option value='12'>12</option>
            <option value='15'>15</option>
            <option value='18'>18</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;
