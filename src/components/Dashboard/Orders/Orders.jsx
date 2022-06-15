import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import classes from '../../Dashboard/DashboardPage.module.scss';

import { FiArrowRight } from 'react-icons/fi';

const Orders = () => {
	const url = 'http://127.0.0.1:8000/api';
	const [orders, setorders] = useState([]);

	useEffect(() => {
		getOrders();
		async function getOrders() {
			try {
				const res = await fetch(`${url}/orderjoin`);

				const data = await res.json();
				setorders(data);
			} catch (error) {
				console.log(error);
			}
		}
	}, []);

	return (
		<div className={classes.right}>
			<h1>Orders</h1>
			<div className={classes.orderContainer}>
				<div className={classes.ordersHeader}>
					<h3>#</h3>
					<h3>Date purchased</h3>
					<h3>User</h3>
					<h3>User ID</h3>
					<div>
						<FiArrowRight />
					</div>
				</div>
				{[...orders].reverse().map((o) => (
					<div key={o.order_id} className={classes.ordersItem}>
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
						<h3>{`${o.firstName} ${o.lastName}`}</h3>
						<h3>{o.user_id}</h3>
						<Link to={`./item/${o.order_id}`}>
							<FiArrowRight />
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Orders;
