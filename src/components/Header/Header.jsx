import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { showCart, showWish } from '../../store/wishListSlice';
import classes from './Header.module.scss';

import { FiAlignRight, FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <header>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <Link to='/'>
            <h1>E-Com</h1>
          </Link>
          <ul className={classes.laptopOnly}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Shop'>Shop</Link>
            </li>
          </ul>
        </div>
        <ul>
          <li onClick={() => dispatch(showCart())}>
            <FiShoppingCart />
          </li>
          <li onClick={() => dispatch(showWish())}>
            <FiHeart />
          </li>
          <li className={classes.laptopOnly}>
            <Link to='/Profile'>
              <FiUser />
            </Link>
          </li>
          <li className={classes.mobileOnly}>
            <FiAlignRight />
          </li>
        </ul>
      </div>
    </header>
  );
};
