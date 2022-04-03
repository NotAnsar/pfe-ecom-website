import React from 'react';

import classes from './Footer.module.scss';

const Section = ({ showSection, setshowSection, logo }) => {
  const Icon = logo;

  return (
    <div className={classes.section}>
      <div className={classes.header}>
        <h5>E-Com Shop</h5>
        <div
          className={`${classes.arrow} ${
            showSection ? classes.arrowOpen : classes.arrowClose
          } `}
          onClick={() => {
            setshowSection((p) => !p);
          }}
        >
          <Icon />
        </div>
      </div>
      {showSection && (
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      )}
    </div>
  );
};

export default Section;
