import React, { useState } from 'react';

import { IoIosArrowUp } from 'react-icons/io';
import classes from './Checkout.module.scss';
import CheckoutForm from './CheckoutForm';
import PayementForm from './PayementForm';
import Summary from './Summary';

const Checkout = () => {
  /* const [checkFormData, setCheckFormData] = useState({
    email: '',
    fName: '',
    lName: '',
    phone: '',
    country: 'morocco',
    adresse: '',
    city: '',
    zcode: '',
  });

  const CheckoutFormHandler = (e) => {
    e.preventDefault();
    if (
      formData.email.trim() === '' ||
      formData.fName.trim() === '' ||
      formData.lName.trim() === '' ||
      formData.phone.trim() === '' ||
      formData.country.trim() === '' ||
      formData.adresse.trim() === '' ||
      formData.city.trim() === '' ||
      formData.zcode.trim() === ''
    ) {
      alert('Fill Out All The Fields');
      return;
    }

    console.log(formData);
  }; */
  return (
    <div className={classes.container}>
      <div className={classes.stepContainer}>
        <span className={classes.selected}>1. Your Information</span>
        <div className={`${classes.steptwo} ` /*   */}>
          <IoIosArrowUp />
          <span>2. Payement</span>
        </div>
      </div>
      <div className={classes.grid}>
        <div>
          <CheckoutForm />
          {/* <PayementForm /> */}
        </div>
        <div>
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
