import React, { Fragment, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { hideWish } from '../../store/wishListSlice';

import classes from './WishList.module.scss';

import { DropShadow } from './DropShadow';
import Middle from './Middle';
import Top from './Top';

export const WishList = () => {
  const dispatch = useDispatch();
  const showWish = useSelector((state) => state.wishCard.wishIsShowing);

  const wishListClasses = `${classes.card} ${
    showWish === null ? '' : showWish ? classes.open : classes.close
  }`;

  const hideWishList = () => dispatch(hideWish());

  return (
    <Fragment>
      <div className={wishListClasses}>
        <form className={classes.container}>
          <Top hideWishlist={hideWishList} />
          <Middle />
        </form>
      </div>
      <DropShadow show={showWish} hide={hideWishList} />
    </Fragment>
  );
};
