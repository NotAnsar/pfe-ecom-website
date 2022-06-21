import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import classes from '../Dashboard/DashboardPage.module.scss';

const OrderItem = () => {
	const { id } = useParams();
	const url = 'http://127.0.0.1:8000/api';
	const [ordersItem, setordersItem] = useState([]);
	const { brands, categories } = useSelector((state) => state.products);

	useEffect(() => {
		getOrdersItems();
		async function getOrdersItems() {
			try {
				const res = await fetch(`${url}/order-itemjoin?order_id=${id}`);
				const data = await res.json();
				console.log(data);
				setordersItem(data);
			} catch (error) {
				console.log(error);
			}
		}
	}, []);

	function calculateTotal() {
		let total = 0;
		ordersItem.forEach((item) => {
			total += item.price * item.quantity;
		});

		return total;
	}
	function find(id, type = 'brand') {
		if (!brands) return;
		if (type === 'brand') {
			let data = brands?.find((b) => b.brand_id === id);
			if (data) return data.brand;
		} else {
			let data = categories?.find((b) => b.categorie_id === id);

			if (data) return data.categorie;
		}
	}

	return (
		<div className={classes.right}>
			<h1>My Orders Detail</h1>

			<div className={classes.orderItemContainer}>
				<div className={classes.orderItemHeader}>
					<h3>image</h3>
					<h3>name</h3>
					<h3>Categorie</h3>
					<h3>Brand</h3>
					<h3>quantity</h3>
					<h3>price</h3>
				</div>
				{ordersItem.map((o, i) => (
					<div key={o.order_id + i} className={classes.orderItem}>
						<div>
							<img
								src={`http://localhost:3000/images/${o.image}`}
								alt={o.name}
							/>
						</div>
						<div>{o.name}</div>
						<div>{categories && find(o.categorie_id, 'h')}</div>
						<div>{brands && find(o.brand_id)}</div>
						<div>{o.quantity}</div>
						<div className={classes.priceLeft}>${o.price}</div>
					</div>
				))}
			</div>
			<div className={classes.total}>
				<h1>Total</h1>
				<p>${calculateTotal().toFixed(2)}</p>
			</div>
		</div>
	);
};
//

export default OrderItem;
