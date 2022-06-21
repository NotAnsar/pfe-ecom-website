import React from 'react';

import classes from './DashboardPage.module.scss';

import {
	FiGrid,
	FiUser,
	FiList,
	FiPackage,
	FiLogOut,
	FiShoppingBag,
} from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../store/authentication';
import { useDispatch, useSelector } from 'react-redux';
import { clearCarts } from '../../store/cartSlice';

const LeftNav = () => {
	const location = useLocation();
	const dispatch = useDispatch();

	const { lastName, firstName } = useSelector((state) => state.auth);

	return (
		<nav className={classes.nav}>
			<div className={classes.wrapper}>
				<ul className={classes.ul}>
					<li className={classes.profile}>
						<FaUserCircle />
						<p className={classes.laptopOnly}>{`${
							firstName?.charAt(0).toUpperCase() +
							firstName?.slice(1).toLowerCase()
						} ${
							lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase()
						}`}</p>
					</li>
					<li
						className={`${!location.pathname.split('/')[2] && classes.clicked}`}
					>
						<Link to=''>
							<FiGrid />
							<span className={classes.laptopOnly}> Dashboard</span>
						</Link>
					</li>

					<li
						className={`${
							location.pathname.split('/')[2] === 'users' && classes.clicked
						}`}
					>
						<Link to='users'>
							<FiUser />
							<span className={classes.laptopOnly}> Users</span>
						</Link>
					</li>
					<li
						className={`${
							location.pathname.split('/')[2] === 'orders' && classes.clicked
						}`}
					>
						<Link to='orders'>
							<FiShoppingBag />
							<span className={classes.laptopOnly}>Orders</span>
						</Link>
					</li>
					<li
						className={`${
							location.pathname.split('/')[2] === 'brands' && classes.clicked
						}`}
					>
						<Link to='brands'>
							<FiList /> <span className={classes.laptopOnly}> Brands</span>
						</Link>
					</li>
					<li
						className={`${
							location.pathname.split('/')[2] === 'categories' &&
							classes.clicked
						}`}
					>
						<Link to='categories'>
							<FiList />
							<span className={classes.laptopOnly}> Categorie</span>
						</Link>
					</li>
					<li
						className={`${
							location.pathname.split('/')[2] === 'products' && classes.clicked
						}`}
					>
						<Link to='products'>
							<FiPackage />
							<span className={classes.laptopOnly}> Products</span>
						</Link>
					</li>
					<li
						className={classes.logout}
						onClick={() => {
							dispatch(logout());
							dispatch(clearCarts());
						}}
					>
						<Link to=''>
							<FiLogOut />
							<span className={classes.laptopOnly}> LogOut</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default LeftNav;
