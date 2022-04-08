import React, { useEffect } from 'react';
import PageNotFound from '../components/PageNotFound/PageNotFound';

export const Error = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return <PageNotFound />;
};
