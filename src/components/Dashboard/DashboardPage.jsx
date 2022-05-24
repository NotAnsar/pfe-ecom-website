import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Clients from './Clients';

import classes from './DashboardPage.module.scss';
import LeftNav from './LeftNav';
import Products from './Product/Products';

import { Error } from '../../pages/Error';
import EditProduct from './Product/EditProduct';
import AddProduct from './Product/AddProduct';
import { RightNav } from './RightNav';
import { useSelector } from 'react-redux';

const DashboardPage = () => {
	const { loggedIn, role } = useSelector((state) => state.auth);
	let navigate = useNavigate();

	useEffect(() => {
		if (!loggedIn) navigate('/login');
		if (loggedIn && role === 'user') navigate('/profile');
	}, [loggedIn]);
	return (
		<div className={classes.container}>
			<LeftNav />

			<Routes>
				<Route path='' element={<RightNav />} />
				{/* <Route path='clients' element={</>} /> */}
				{/* <Route path='admins' element={< />} /> */}
				{/* <Route path='brands' element={<Dashboard />} /> */}
				{/* <Route path='categories' element={<Login />} /> */}
				{/* <Route path='register' element={<Register />} /> */}
				<Route path='products' element={<Products />} />
				<Route path='products/edit/:id' element={<EditProduct />} />
				<Route path='products/add' element={<AddProduct />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</div>
	);
};

export default DashboardPage;
