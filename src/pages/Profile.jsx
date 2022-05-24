import React, { useEffect } from 'react';

import ProfilePage from '../components/Profile/ProfilePage';

const Profile = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);

	return <ProfilePage />;
};

export default Profile;
