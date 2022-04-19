import React, { useState } from 'react';

import classes from './Form.module.scss';

const PayementForm = () => {
  const [formData, setFormData] = useState({
    numCard: '',
    expYear: '',
    expMonth: '',
    cvc: '',
    nameOnCard: '',
  });

  const formHandler = (e) => {
    e.preventDefault();
    if (
      formData.numCard.trim() === '' ||
      formData.expYear.trim() === '' ||
      formData.expMonth.trim() === '' ||
      formData.cvc.trim() === '' ||
      formData.nameOnCard.trim() === ''
    ) {
      alert('Fill Out All The Fields');
      return;
    }

    console.log(formData);
  };

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    console.log(value + ' ' + name);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={classes.login}>
      <div className={classes.container}>
        <div className={classes.formC}>
          <form onSubmit={formHandler}>
            <label htmlFor='nameOnCard'>Name Of Cardholder</label>
            <input
              type='text'
              onChange={handleChange}
              name='nameOnCard'
              required
            />

            <label htmlFor='numCard'>Card Number</label>
            <input
              type='text'
              onChange={handleChange}
              name='numCard'
              required
            />
            <div>
              <label htmlFor='expMonth'>EXPIRY DATE </label>
              <div className={classes.splitForm}>
                <input
                  type='month'
                  onChange={handleChange}
                  name='expMonth'
                  minLength='3'
                  required
                />

                <input
                  type='text'
                  onChange={handleChange}
                  name='zcode'
                  minLength='3'
                  required
                />
              </div>
            </div>

            <label htmlFor='cvc'>Cvc</label>
            <input type='text' onChange={handleChange} name='cvc' required />
            <input type='Submit' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PayementForm;
