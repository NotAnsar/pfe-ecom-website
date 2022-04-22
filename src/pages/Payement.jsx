import React, { useEffect } from 'react';
import Checkout from '../components/Checkout/Checkout';

export const Payement = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return <Checkout type='payement' />;
};
