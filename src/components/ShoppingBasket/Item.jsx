import React, { useEffect, useState } from 'react';
import classes from './ShoppingBasket.module.scss';

const Item = ({ id, image, name, price, qte }) => {
  const [quantity, setQte] = useState(+qte);

  return (
    <div className={classes.itemContainer}>
      <div className={classes.item}>
        <img src={`./images/${image}`} alt={name} />
        <div>
          <h2>{name}</h2>
          {/* <p>{details}</p> */}
          <div className={classes.qteContainer}>
            <div className={classes.quantity}>
              <span
                className={classes.span}
                onClick={() => {
                  if (quantity > 1) {
                    setQte((p) => p - 1);
                  }
                }}
              >
                -
              </span>
              <input
                min='1'
                max='5'
                onChange={() => console.log('a')}
                value={quantity}
                type='tel'
              />
              <span
                className={classes.span}
                onClick={() => {
                  if (quantity < 5) {
                    setQte((p) => p + 1);
                  }
                }}
              >
                +
              </span>
            </div>
            <h3>{`$${price}`}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
