import React, { useEffect, useState } from 'react';

import { IoIosArrowUp } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classes from './Checkout.module.scss';
import CheckoutForm from './CheckoutForm';
import PayementForm from './PayementForm';
import Summary from './Summary';

const Checkout = ({ type }) => {
	const { loggedIn, role } = useSelector((state) => state.auth);
	const auth = useSelector((state) => state.auth);
	console.log(auth);
	let navigate = useNavigate();

	useEffect(() => {
		if (!loggedIn) navigate('/login');
		if (role == 'admin') navigate('/dashboard');
	}, [loggedIn]);
	return (
		<div className={classes.container}>
			<div className={classes.stepContainer}>
				<span className={`${type === 'checkout' && classes.selected}`}>
					1. Your Information
				</span>
				<div
					className={`${classes.steptwo} ${
						type !== 'checkout' && classes.selected
					}`}
				>
					<IoIosArrowUp />
					<span>2. Payement</span>
				</div>
			</div>
			<div className={classes.grid}>
				{type === 'checkout' ? <CheckoutForm /> : <PayementForm />}
				<div>
					<Summary type={type} />
				</div>
			</div>
		</div>
	);
};

export default Checkout;
