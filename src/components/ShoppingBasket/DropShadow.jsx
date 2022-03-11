import React from 'react';
import classes from './DropShadow.module.scss';

export const DropShadow = ({ show, hide }) => {
  document.body.style.overflowY = show ? 'hidden' : '';
  const dropShadowClasses = `${classes.drop} ${
    show === null ? '' : show ? classes.open : classes.close
  }`;

  return <div onClick={hide} className={dropShadowClasses}></div>;
};
