import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Profile = () => {
  const [LoggedIn, setLoggedIn] = useState(false);

  return LoggedIn ? <div>Profile</div> : <Navigate to='/login' replace />;
};

export default Profile;
