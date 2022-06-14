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
import Brands from './Brand/Brands';
import AddBrand from './Brand/AddBrand';
import EditBrand from './Brand/EditBrand';
import Categories from './Categorie/Categories';
import AddCategorie from './Categorie/AddCategorie';
import EditCategorie from './Categorie/EditCategorie';
import Users from './User/Users';
import AddUser from './User/AddUser';
import EditUser from './User/EditUser';
import Orders from './Orders/Orders';
import OrderDetail from './Orders/OrderDetail';

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

				<Route path='users' element={<Users />} />
				<Route path='users/add' element={<AddUser />} />
				<Route path='users/edit/:id' element={<EditUser />} />

				<Route path='brands' element={<Brands />} />
				<Route path='brands/add' element={<AddBrand />} />
				<Route path='brands/edit/:id' element={<EditBrand />} />

				<Route path='categories' element={<Categories />} />
				<Route path='categories/add' element={<AddCategorie />} />
				<Route path='categories/edit/:id' element={<EditCategorie />} />

				<Route path='products' element={<Products />} />
				<Route path='products/edit/:id' element={<EditProduct />} />
				<Route path='products/add' element={<AddProduct />} />

				<Route path='orders' element={<Orders />} />
				<Route path='orders/item/:id' element={<OrderDetail />} />

				<Route path='*' element={<Error />} />
			</Routes>
		</div>
	);
};

export default DashboardPage;
