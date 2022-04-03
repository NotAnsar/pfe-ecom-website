import React, { Fragment, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { hideCart } from '../../store/wishListSlice';

import classes from './ShoppingBasket.module.scss';

import { DropShadow } from './DropShadow';
import Middle from './Middle';
import Bottom from './Bottom';
import Top from './Top';

export const ShoppingBasket = () => {
  const dispatch = useDispatch();
  const showWish = useSelector((state) => state.wishCard.cartIsShowing);
  const cart = useSelector((state) => state.products.trendingItems);
  // const showWish = true;

  const shoppingBasketClasses = `${classes.card} ${
    showWish === null ? '' : showWish ? classes.open : classes.close
  }`;

  const hideShoppingBasket = () => dispatch(hideCart());

  return (
    <Fragment>
      <div className={shoppingBasketClasses}>
        <form className={classes.container}>
          <Top hideBasket={hideShoppingBasket} />
          <Middle cart={cart} />
          <Bottom total={'$74.97'} cart={cart} />
        </form>
      </div>
      <DropShadow show={showWish} hide={hideShoppingBasket} />
    </Fragment>
  );
};
