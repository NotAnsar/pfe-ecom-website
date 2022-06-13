import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Error } from '../../pages/Error';

import classes from '../Dashboard/DashboardPage.module.scss';
import Adresse from './Adresse';

import LeftNav from './LeftNav';
import MyOrders from './MyOrders';
import OrderItem from './OrderItem';
import { ProfileInfo } from './ProfileInfo';

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
				<Route path='' element={<ProfileInfo />} />
				<Route path='adresse' element={<Adresse />} />
				<Route path='orders' element={<MyOrders />} />

				<Route path='orders/item/:id' element={<OrderItem />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</div>
	);
};

export default ProfilePage;
