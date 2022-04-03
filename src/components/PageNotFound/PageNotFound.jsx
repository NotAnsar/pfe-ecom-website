import React from 'react';
import { Link } from 'react-router-dom';

import classes from './PageNotFound.module.scss';

const PageNotFound = () => {
  return (
    <div className={classes.container}>
      <h1>404 Page Not Found</h1>
      <p>The page you were looking for does not exist.</p>

      <Link className={classes.link} to='/'>
        Continue shopping
      </Link>
    </div>
  );
};

export default PageNotFound;
