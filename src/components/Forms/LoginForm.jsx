import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './Form.module.scss';
const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const formHandler = (e) => {
    e.preventDefault();
    console.log('hi');
  };
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className={classes.login}>
      <div className={classes.container}>
        <div className={classes.form}>
          <form onSubmit={formHandler}>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              onChange={handleChange}
              value={formData.email}
              required
            />
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              minLength='6'
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input type='Submit' placeholder='Login Now' />
          </form>
          <div className={classes.newUser}>
            <Link to='/register'>New User ?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
