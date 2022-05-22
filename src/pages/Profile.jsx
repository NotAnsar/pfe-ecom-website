import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import ProfilePage from '../components/Profile/ProfilePage';

const Profile = () => {
	const [LoggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);

	// return LoggedIn ? <div>Profile</div> : <Navigate to='/login' replace />;
	return <ProfilePage />;
};

export default Profile;
