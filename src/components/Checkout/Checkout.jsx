import React, { useState } from 'react';

import { IoIosArrowUp } from 'react-icons/io';
import classes from './Checkout.module.scss';
import CheckoutForm from './CheckoutForm';
import PayementForm from './PayementForm';
import Summary from './Summary';

const Checkout = ({ type }) => {
  return (
    <div className={classes.container}>
      <div className={classes.stepContainer}>
        <span className={`${type === 'checkout' && classes.selected}`}>
          1. Your Information
        </span>
        <div
          className={`${classes.steptwo} ${
            type !== 'checkout' && classes.selected
          }`}
        >
          <IoIosArrowUp />
          <span>2. Payement</span>
        </div>
      </div>
      <div className={classes.grid}>
        {type === 'checkout' ? <CheckoutForm /> : <PayementForm />}
        <div>
          <Summary type={type} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
