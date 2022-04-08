import React, { useEffect } from 'react';
import RegisterForm from '../components/Forms/RegisterForm';

const Register = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return <RegisterForm />;
};

export default Register;
