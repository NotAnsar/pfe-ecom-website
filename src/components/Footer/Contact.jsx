import React from 'react';

import classes from './Footer.module.scss';
import { FiMail, FiPhoneCall } from 'react-icons/fi';

const Contact = ({ showContact, setshowContact, logo }) => {
  const Icon = logo;

  return (
    <div className={classes.contact}>
      <div className={classes.header}>
        <h5>Contact Us</h5>
        <div
          className={`${classes.arrow} ${
            showContact ? classes.arrowOpen : classes.arrowClose
          } `}
          onClick={() => {
            setshowContact((p) => !p);
          }}
        >
          <Icon />
        </div>
      </div>
      {showContact && (
        <ul>
          <li>
            <FiPhoneCall /> +212640449139
          </li>
          <li>
            <FiMail />
            ansar.karrouach@icloud.com
          </li>
        </ul>
      )}
    </div>
  );
};

export default Contact;
