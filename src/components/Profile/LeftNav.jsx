import React from 'react';

import classes from '../Dashboard/DashboardPage.module.scss';

import { FiUser, FiHome, FiLogOut } from 'react-icons/fi';
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
				<ul>
					<li className={classes.profile}>
						{/* <img src='' alt='' /> */}
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
							<FiUser />
							Profile Info
						</Link>
					</li>
					<li
						className={`${
							location.pathname.split('/')[2] === 'adresse' && classes.clicked
						}`}
					>
						<Link to='adresse'>
							<FiHome /> Adresse
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
							Logout
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default LeftNav;
