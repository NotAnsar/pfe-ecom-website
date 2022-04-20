import React from 'react';

import classes from './Newsletter.module.scss';
import { FiSend } from 'react-icons/fi';
const Newsletter = () => {
  return (
    <div className={classes.newsletter}>
      <div className={classes.container}>
        <FiSend />
        <h3>Subscribe To Our Newsletter</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        <div className={classes.inputContainer}>
          <input type='email' placeholder='Enter a valid email adresse' />
          <input type='submit' />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
