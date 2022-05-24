import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Error } from '../../pages/Error';

import classes from '../Dashboard/DashboardPage.module.scss';
import { RightNav } from '../Dashboard/RightNav';

import LeftNav from './LeftNav';

const ProfilePage = () => {
	const { loggedIn, role } = useSelector((state) => state.auth);
	let navigate = useNavigate();

	useEffect(() => {
		if (!loggedIn) navigate('/login');
		if (loggedIn && role === 'admin') navigate('/dashboard');
	}, [loggedIn]);
	return (
		<div className={classes.container}>
			<LeftNav />

			<Routes>
				<Route path='' element={<RightNav />} />

				<Route path='*' element={<Error />} />
			</Routes>
		</div>
	);
};

export default ProfilePage;
