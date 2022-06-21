import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './OrderConfirmPage.module.scss';
import { FiCheck } from 'react-icons/fi';

export const OrderConfirmPage = () => {
	const location = useLocation();

	const today = new Date();
	const options = { weekday: 'long', month: 'long', day: 'numeric' };

	const from = new Intl.DateTimeFormat('en-GB', options).format(
		new Date(today.setDate(today.getDate() + 5))
	);
	const to = new Intl.DateTimeFormat('en-GB', options).format(
		new Date(today.setDate(today.getDate() + 5))
	);

	return (
		<div className={classes.container}>
			<div className={classes.check}>
				<FiCheck />
				<p>ORDER PLACED CORRECTLY</p>
			</div>
			<div className={classes.thanking}>
				<h3>THANK YOU FOR YOUR ORDER</h3>
				<p>
					Thanks for purchasing from our website .The order with id{' '}
					{location.state.id} has Been created successfully .You will soon
					receive Your Order Between
					{` ${from} `}And {` ${to} `}. You will be able to pay for your order
					once it arrives to the selected Adresse.
				</p>
				<Link to='/' className='button'>
					Go Back To Home Page
				</Link>
			</div>
		</div>
	);
};
