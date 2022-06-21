import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from '../Dashboard/DashboardPage.module.scss';
import { FiArrowRight } from 'react-icons/fi';

const MyOrders = () => {
	const { id } = useSelector((state) => state.auth);
	const url = 'http://127.0.0.1:8000/api';
	const [orders, setorders] = useState([]);

	useEffect(() => {
		getOrders();
		async function getOrders() {
			try {
				const res = await fetch(`${url}/orderjoin?user_id=${id}`);

				const data = await res.json();
				setorders(data);
			} catch (error) {
				console.log(error);
			}
		}
	}, []);

	return (
		<div className={classes.right}>
			<h1>My Orders</h1>
			<div className={classes.orderContainer}>
				{orders.length === 0 && <p>You have No orders</p>}

				{orders.length !== 0 && (
					<div className={classes.orderHeader}>
						<h3>Order Id</h3>
						<h3>Date purchased</h3>
						<div>
							<FiArrowRight />
						</div>
					</div>
				)}

				{orders.length !== 0 &&
					[...orders].reverse().map((o) => (
						<div key={o.order_id} className={classes.orderItem}>
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
							<Link to={`./item/${o.order_id}`}>
								<FiArrowRight />
							</Link>
						</div>
					))}
			</div>
		</div>
	);
};

export default MyOrders;
