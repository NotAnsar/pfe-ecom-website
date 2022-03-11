import React from 'react';
import classes from './Advantages.module.scss';
import { Item } from './Item';

import { FiHeadphones, FiCheckCircle, FiCreditCard } from 'react-icons/fi';

export const Advantages = () => {
  return (
    <div className={classes.container}>
      <div className={classes.itemContainer}>
        <Item
          logo={FiCheckCircle}
          title={'Free Shipping & Return'}
          detail={'All on order over $99'}
        />
        <Item
          logo={FiHeadphones}
          title={'Customer Support 24/7'}
          detail={'Instant access to support'}
        />
        <Item
          logo={FiCreditCard}
          title={'100% Secure Payment'}
          detail={'We ensure secure payment'}
        />
      </div>
    </div>
  );
};
