import React, { Fragment } from 'react';

import classes from './Summary.module.scss';

import Itm from './Itm';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Summary = ({ type }) => {
  const { cart, total } = useSelector((state) => state.storageSlice);

  return (
    <Fragment>
      <div className={classes.middle}>
        {cart.length === 0 ? (
          <p className={classes.empty}>Your cart is currently empty.</p>
        ) : (
          cart.map((p) => (
            <Itm
              key={p.product_id}
              id={p.product_id}
              image={p.image}
              name={p.name}
              price={p.price}
              qte={p.qte}
              brand={p.brand}
              categorie={p.categorie}
            />
          ))
        )}
      </div>
      <div className={classes.totalContainer}>
        <p>Total</p>
        <p>${total.toFixed(2)}</p>
      </div>
      <div className={classes.btn}>
        {type === 'checkout' ? (
          <input type='Submit' form='checkoutForm' defaultValue='CONTINUE' />
        ) : (
          <input type='Submit' defaultValue='Pay' form='payementForm' />
        )}
      </div>
    </Fragment>
  );
};

export default Summary;
