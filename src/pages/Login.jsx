import React, { useEffect } from 'react';
import LoginForm from '../components/Forms/LoginForm';

const Login = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return <LoginForm />;
};

export default Login;
