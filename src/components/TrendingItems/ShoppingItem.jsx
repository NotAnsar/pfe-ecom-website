import React from 'react';
import { Link } from 'react-router-dom';

import classes from './TrendingItems.module.scss';

const ShoppingItem = ({ image, name, price, id }) => {
  return (
    <Link to={`/product/${id}`} className={classes.itm}>
      <div className={classes.rowgrid}>
        <div className={classes.img}>
          <img src={`./images/${image}`} alt={name} />
          <img src={`./../images/${image}`} alt={name} />
          <img src={`./../../images/${image}`} alt={name} />
          <img src={`../../../images/${image}`} alt={name} />
          <img src={`../../../images/img1.png`} alt={name} />
          <img src={`../../images/img1.png`} alt={name} />
          <img src={`../images/img1.png`} alt={name} />
          <img src={`./images/img1.png`} alt={name} />
        </div>
        <div>
          <h2>{name}</h2>
          <h4>${price.toFixed(2)}</h4>
        </div>
      </div>
    </Link>
  );
};

export default ShoppingItem;
