import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Profile = () => {
  const [LoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return LoggedIn ? <div>Profile</div> : <Navigate to='/login' replace />;
};

export default Profile;
