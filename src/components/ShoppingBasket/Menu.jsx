import React, { Fragment } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { FiX } from 'react-icons/fi';

import classes from './ShoppingBasket.module.scss';

import { DropShadow } from './DropShadow';
import { hideMenu } from '../../store/wishListSlice';
import { Link } from 'react-router-dom';

export const Menu = () => {
  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.wishCard.menuIsShowing);
  const menuClasses = `${classes.card} ${
    showMenu === null ? '' : showMenu ? classes.open : classes.close
  }`;

  const hide = () => dispatch(hideMenu());

  return (
    <Fragment>
      <div className={menuClasses}>
        <div className={classes.menuContainer}>
          <div className={classes.menu}>
            <span onClick={hide}>
              <FiX />
            </span>
          </div>
          <ul>
            <li className={classes.menuLinks}>
              <p>
                <Link to='/'>Home</Link>
              </p>
            </li>
            <li className={classes.menuLinks}>
              <p>
                <Link to='/Shop'>Shop</Link>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <DropShadow show={showMenu} hide={hide} />
    </Fragment>
  );
};
