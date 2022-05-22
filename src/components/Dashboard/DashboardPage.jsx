import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Clients from './Clients';

import classes from './DashboardPage.module.scss';
import LeftNav from './LeftNav';
import Products from './Product/Products';

import { Error } from '../../pages/Error';
import EditProduct from './Product/EditProduct';
import AddProduct from './Product/AddProduct';
import { RightNav } from './RightNav';

const DashboardPage = () => {
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
