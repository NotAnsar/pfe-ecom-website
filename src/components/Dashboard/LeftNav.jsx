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

const LeftNav = () => {
	const location = useLocation();

	return (
		<nav className={classes.nav}>
			<div className={classes.wrapper}>
				<ul>
					<li className={classes.profile}>
						<FaUserCircle />
						<p>Ansar Karrouach</p>
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
							location.pathname.split('/')[2] === 'clients' && classes.clicked
						}`}
					>
						<Link to='clients'>
							<FiUsers />
							Clients
						</Link>
					</li>
					<li
						className={`${
							location.pathname.split('/')[2] === 'admins' && classes.clicked
						}`}
					>
						<Link to='admins'>
							<FiUser />
							Admins
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
					<li className={classes.logout}>
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
