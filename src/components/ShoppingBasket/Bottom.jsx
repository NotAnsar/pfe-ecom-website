import React from 'react';
import classes from './ShoppingBasket.module.scss';

const Bottom = ({ total }) => {
  return (
    <div className={classes.bottom}>
      <div>
        <h3>Total</h3>
        <h3>{total}</h3>
      </div>
      <a href='#0' className='button'>
        Check out
      </a>
    </div>
  );
};

export default Bottom;
