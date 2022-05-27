import React from 'react';

import classes from './DashboardPage.module.scss';

import {
	FiGrid,
	FiUser,
	FiUsers,
	FiList,
	FiPackage,
	FiLogOut,
} from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../store/authentication';
import { useDispatch, useSelector } from 'react-redux';

const LeftNav = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const { lastName, firstName } = useSelector((state) => state.auth);

	return (
		<nav className={classes.nav}>
			<div className={classes.wrapper}>
				<ul>
					<li className={classes.profile}>
						<FaUserCircle />
						<p>{`${
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
							Dashboard
						</Link>
					</li>

					<li
						className={`${
							location.pathname.split('/')[2] === 'users' && classes.clicked
						}`}
					>
						<Link to='users'>
							<FiUser />
							Users
						</Link>
					</li>
					<li
						className={`${
							location.pathname.split('/')[2] === 'brands' && classes.clicked
						}`}
					>
						<Link to='brands'>
							<FiList /> Brands
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
							Categories
						</Link>
					</li>
					<li
						className={`${
							location.pathname.split('/')[2] === 'products' && classes.clicked
						}`}
					>
						<Link to='products'>
							<FiPackage />
							Products
						</Link>
					</li>
					<li className={classes.logout} onClick={() => dispatch(logout())}>
						<Link to=''>
							<FiLogOut />
							Logout
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default LeftNav;
