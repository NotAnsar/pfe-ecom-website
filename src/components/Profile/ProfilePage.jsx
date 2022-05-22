import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Error } from '../../pages/Error';

import classes from '../Dashboard/DashboardPage.module.scss';
import { RightNav } from '../Dashboard/RightNav';

import LeftNav from './LeftNav';

const ProfilePage = () => {
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
