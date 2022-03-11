import React from 'react';
import classes from './Advantages.module.scss';

export const Item = ({ logo, title, detail }) => {
  const Icon = logo;
  return (
    <div className={classes.item}>
      <div className={classes.logo}>
        <Icon />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{detail}</p>
      </div>
    </div>
  );
};
