import React, { useState } from 'react';

import { IoIosArrowUp } from 'react-icons/io';
import classes from '../Checkout/Checkout.module.scss';

import Summary from '../Checkout/Summary';

const PayementPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.stepContainer}>
        <span>1. Your Information</span>
        <div className={`${classes.steptwo} ${classes.selected} `}>
          <IoIosArrowUp />
          <span>2. Payement</span>
        </div>
      </div>
      <div className={classes.grid}>
        <div></div>
        <div>
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default PayementPage;
