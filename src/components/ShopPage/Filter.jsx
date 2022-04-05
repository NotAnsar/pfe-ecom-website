import React from 'react';
import Brand from './Brand';
import classes from './ShopItem.module.scss';

const Filter = ({ brands, categories }) => {
  return (
    <div className={classes.filter}>
      <h2>Filter Products</h2>
      <Brand title='Brand' data={brands} />
      <Brand title='Categorie' data={categories} />
    </div>
  );
};

export default Filter;
