import React, { useEffect } from 'react';

export const Chekout = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return <h1>Chekout</h1>;
};
