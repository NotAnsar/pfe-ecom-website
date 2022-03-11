import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { show } from '../../store/wishListSlice';
import classes from './Header.module.scss';

import { FiAlignRight, FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <header>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <Link to='/'>
            <h1>Vnsvr</h1>
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
          <li onClick={() => dispatch(show())}>
            <FiShoppingCart />
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

        {/* <ul className={classes.mobile}>
          <li onClick={() => dispatch(show())}>
            <FiShoppingCart />
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Shop'>Shop</Link>
          </li>
          <li>
            <Link to='/Profile'>Profile</Link>
          </li>
        </ul> */}
      </div>
    </header>
  );
};
