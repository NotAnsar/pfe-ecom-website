import React from 'react';
import classes from './ShoppingBasket.module.scss';

const Item = ({ title, price, details, qte, img }) => {
  return (
    <div className={classes.itemContainer}>
      <div className={classes.item}>
        <img src={img} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>{details}</p>
          <div className={classes.qteContainer}>
            <div className={classes.quantity}>
              <span className={classes.span}>-</span>
              <input min='1' max='5' defaultValue={qte} type='tel' />
              <span className={classes.span}>+</span>
            </div>
            <h3>{price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
