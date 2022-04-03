import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ShoppingBasket.module.scss';

const Bottom = ({ total, cart }) => {
  return (
    cart.length !== 0 && (
      <div className={classes.bottom}>
        <div>
          <h3>Total</h3>
          <h3>{total}</h3>
        </div>
        <Link to='/checkout' href='#0' className='button'>
          Check out
        </Link>
      </div>
    )
  );
};

export default Bottom;
