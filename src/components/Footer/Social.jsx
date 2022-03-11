import React from 'react';
import classes from './Footer.module.scss';

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from 'react-icons/fa';

const Social = () => {
  return (
    <div className={classes.socials}>
      <ul>
        <li>
          <a href='https://www.facebook.com' target='_blank'>
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com' target='_blank'>
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href='https://www.twitter.com' target='_blank'>
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href='https://www.pinterest.com' target='_blank'>
            <FaPinterestP />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
