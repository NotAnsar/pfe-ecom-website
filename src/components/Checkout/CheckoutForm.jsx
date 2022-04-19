import React, { useState } from 'react';

import classes from './Form.module.scss';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    fName: '',
    lName: '',
    phone: '',
    country: 'morocco',
    adresse: '',
    city: '',
    zcode: '',
  });

  const formHandler = (e) => {
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
  };

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={classes.login}>
      <div className={classes.container}>
        <div className={classes.formC}>
          <form id='checkoutForm' onSubmit={formHandler}>
            <div className={classes.splitForm}>
              <div>
                <label htmlFor='fName'>First Name</label>
                <input
                  type='text'
                  onChange={handleChange}
                  name='fName'
                  required
                />
              </div>
              <div>
                <label htmlFor='lName'>Last Name</label>
                <input
                  type='text'
                  onChange={handleChange}
                  name='lName'
                  required
                />
              </div>
            </div>
            <label htmlFor='email'>Email</label>
            <input type='email' onChange={handleChange} name='email' required />
            <label htmlFor='phone'>Mobile Telephone</label>
            <input
              type='tel'
              onChange={handleChange}
              name='phone'
              maxLength='10'
              minLength='10'
              required
            />
            <label htmlFor='adresse'>Adresse</label>
            <input
              type='text'
              onChange={handleChange}
              name='adresse'
              minLength='6'
              required
            />
            <div className={classes.splitForm}>
              <div>
                <label htmlFor='city'>City</label>
                <input
                  type='text'
                  onChange={handleChange}
                  name='city'
                  minLength='3'
                  required
                />
              </div>
              <div>
                <label htmlFor='zcode'>Zip Code</label>
                <input
                  type='number'
                  onChange={handleChange}
                  name='zcode'
                  minLength='3'
                  required
                />
              </div>
            </div>

            <label htmlFor='city'>Country</label>
            <input
              type='text'
              onChange={handleChange}
              name='country'
              defaultValue='Morocco'
              disabled
              required
            />
            {/* <input type='Submit' /> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
