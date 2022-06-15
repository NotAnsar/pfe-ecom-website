import React, { useEffect } from 'react';

import classes from '../Dashboard/DashboardPage.module.scss';

import { FiShoppingBag, FiUser, FiHome, FiLogOut } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { getAdresse, logout } from '../../store/authentication';
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
							<FiUser />
							<span className={classes.laptopOnly}> Profile Info</span>
						</Link>
					</li>
					<li
						className={`${
							location.pathname.split('/')[2] === 'adresse' && classes.clicked
						}`}
					>
						<Link to='adresse'>
							<FiHome />
							<span className={classes.laptopOnly}> Adresse</span>
						</Link>
					</li>
					<li
						className={`${
							location.pathname.split('/')[2] === 'orders' && classes.clicked
						}`}
					>
						<Link to='orders'>
							<FiShoppingBag />
							<span className={classes.laptopOnly}>My Orders</span>
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
							<span className={classes.laptopOnly}> Logout</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default LeftNav;
