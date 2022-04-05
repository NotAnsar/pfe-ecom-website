import React from 'react';
import classes from './WishList.module.scss';

import { FiX } from 'react-icons/fi';

const Item = ({ id, image, name, price }) => {
  return (
    <div className={classes.itemContainer}>
      <div className={classes.item}>
        <img src={`../images/${image}`} alt={name} />
        <div>
          <h2>{name}</h2>
          <span className={classes.flex}>
            {/* <p>{details}</p> */}
            <p>{`$${price}`}</p>
          </span>
        </div>
        <div className={classes.centersvg}>
          <FiX />
        </div>
      </div>
    </div>
  );
};

export default Item;
