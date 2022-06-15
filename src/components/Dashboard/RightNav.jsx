import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './DashboardPage.module.scss';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import {
	FiDollarSign,
	FiCheckCircle,
	FiUsers,
	FiList,
	FiPackage,
	FiShoppingBag,
} from 'react-icons/fi';
import url from '../../store/url';
import { useSelector } from 'react-redux';

export const RightNav = () => {
	const [orders, setOrders] = useState(null);
	const [orderItems, setOrderItems] = useState(null);
	const [users, setUsers] = useState(null);
	const { brands, categories, products } = useSelector(
		(state) => state.products
	);

	async function fetchAll() {
		try {
			const [resOrders, resOrderItems, resUsers] = await Promise.all([
				fetch(`${url}/orderjoin`),
				fetch(`${url}/order-itemjoin`),
				fetch(`${url}/all-users`),
			]);

			setOrders(await resOrders.json());
			setOrderItems(await resOrderItems.json());
			setUsers(await resUsers.json());
		} catch (error) {
			console.log(error);
		}
	}

	function calculateTotal() {
		let total = 0;
		if (!orderItems) return;
		orderItems?.forEach((item) => {
			total += item.price * item.quantity;
		});

		return total;
	}
	function calculateSelledproduct() {
		let total = 0;

		if (!orderItems) return;

		orderItems?.forEach((item) => {
			total += item.quantity;
		});

		return total;
	}

	useEffect(() => {
		fetchAll();
	}, []);

	if (
		!(
			brands.length > 0 &&
			categories.length > 0 &&
			products.length > 0 &&
			orders &&
			orderItems &&
			users
		)
	)
		return (
			<div className={classes.right}>
				<div className='load'>
					{/* <FiLoader /> */}
					<AiOutlineLoading3Quarters />
				</div>
			</div>
		);
	return (
		<div className={classes.right}>
			<div>
				<ul className={classes.card}>
					<li>
						<FiPackage />
						<p>Products</p>
						<h6>{products.length}</h6>
					</li>
					<li>
						<FiUsers />
						<p>Users</p>
						<h6>{users.length}</h6>
					</li>
					<li>
						<FiList />
						<p>Brands</p>
						<h6>{brands.length}</h6>
					</li>
					<li>
						<FiList />
						<p>Categories</p>
						<h6>{categories.length}</h6>
					</li>
				</ul>
				<ul className={classes.card2}>
					<li>
						<FiShoppingBag />
						<p>Orders</p>
						<h6>{orders.length}</h6>
					</li>
					<li>
						<FiCheckCircle />
						<p>Selled Products</p>
						<h6>{calculateSelledproduct()}</h6>
					</li>
					<li>
						<FiDollarSign />
						<p>Total Earning</p>
						<h6>{calculateTotal().toFixed(2)}$</h6>
					</li>
				</ul>
			</div>
			<div className={classes.lastOrders}>
				<h2>Last Orders</h2>
				<div className={classes.orderContainer}>
					<div className={classes.lastordersHeader}>
						<h3>#</h3>
						<h3>Date purchased</h3>
						<h3>User ID</h3>
						<h3>User</h3>
					</div>
					{orders.slice(-3).map((o) => (
						<div key={o.order_id} className={classes.lastordersItem}>
							<h3>{o.order_id}</h3>
							<h3>
								{new Intl.DateTimeFormat('en-GB', {
									weekday: 'long',
									month: 'long',
									day: 'numeric',
									hour: '2-digit',
									minute: '2-digit',
									second: '2-digit',
								}).format(new Date(o.created_at))}
							</h3>
							<h3>{o.user_id}</h3>
							<h3>{`${o.firstName} ${o.lastName}`}</h3>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
