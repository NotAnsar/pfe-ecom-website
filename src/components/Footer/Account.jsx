import React from 'react';

import classes from './Footer.module.scss';

const Account = ({ showAccount, setshowAccount, logo }) => {
  const Icon = logo;

  return (
    <div className={classes.account}>
      <div className={classes.header}>
        <h5>My Account</h5>
        <div
          className={`${classes.arrow} ${
            showAccount ? classes.arrowOpen : classes.arrowClose
          } `}
          onClick={() => {
            setshowAccount((p) => !p);
          }}
        >
          <Icon />
        </div>
      </div>
      {showAccount && (
        <ul>
          <li>Login</li>
          <li>Register</li>
        </ul>
      )}
    </div>
  );
};

export default Account;
