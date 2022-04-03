import React from 'react';
import Brand from './Brand';
import classes from './ShopItem.module.scss';

const Filter = () => {
  return (
    <div className={classes.filter}>
      <h2>Filter Products</h2>
      <Brand title='Brand' data={['apple', 'samsung', 'google', 'OnPlus']} />
      <Brand title='Categorie' data={['Phone', 'Tablet', 'Laptop']} />
    </div>
  );
};

export default Filter;
