import React from 'react';

import classes from '../Dashboard/DashboardPage.module.scss';

import { FiUser, FiSettings, FiHeart, FiLogOut } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../store/authentication';
import { useDispatch } from 'react-redux';
import { clearCarts } from '../../store/cartSlice';

const LeftNav = () => {
	const location = useLocation();
	const dispatch = useDispatch();

	return (
		<nav className={classes.nav}>
			<div className={classes.wrapper}>
				<ul>
					<li className={classes.profile}>
						{/* <img src='' alt='' /> */}
						<FaUserCircle />
						<p>Ansar Karrouach</p>
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
							location.pathname.split('/')[2] === 'settings' && classes.clicked
						}`}
					>
						<Link to='settings'>
							<FiSettings /> Settings
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
