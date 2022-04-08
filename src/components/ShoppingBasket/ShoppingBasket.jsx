import React, { Fragment, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { hideCart } from '../../store/wishListSlice';

import classes from './ShoppingBasket.module.scss';

import { DropShadow } from './DropShadow';
import Middle from './Middle';
import Bottom from './Bottom';
import Top from './Top';
import { calculateTotal } from '../../store/cartSlice';

export const ShoppingBasket = () => {
  const dispatch = useDispatch();
  const showWish = useSelector((state) => state.wishCard.cartIsShowing);
  const { cart, total } = useSelector((state) => state.storageSlice);

  const shoppingBasketClasses = `${classes.card} ${
    showWish === null ? '' : showWish ? classes.open : classes.close
  }`;

  const hideShoppingBasket = () => dispatch(hideCart());

  useEffect(() => {
    dispatch(calculateTotal());
  }, []);

  return (
    <Fragment>
      <div className={shoppingBasketClasses}>
        <form className={classes.container}>
          <Top hideBasket={hideShoppingBasket} />
          <Middle cart={cart} />
          {cart.length > 0 && <Bottom total={total} />}
        </form>
      </div>
      <DropShadow show={showWish} hide={hideShoppingBasket} />
    </Fragment>
  );
};
