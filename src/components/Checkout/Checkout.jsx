import React, { useEffect, useState } from 'react';

import { IoIosArrowUp } from 'react-icons/io';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import classes from './Checkout.module.scss';
import CheckoutForm from './CheckoutForm';
import PayementForm from './PayementForm';
import Summary from './Summary';

const Checkout = () => {
	const { loggedIn, role } = useSelector((state) => state.auth);

	let navigate = useNavigate();

	useEffect(() => {
		if (!loggedIn) navigate('/login');
		if (role === 'admin') navigate('/dashboard');
	}, [loggedIn, role]);

	return (
		<div className={classes.container}>
			<div className={classes.stepContainer}>
				<span className={classes.selected}>
					<h2> Your Information</h2>
				</span>
				{/* <div
					className={`${classes.steptwo} ${
						type !== 'checkout' && classes.selected
					}`}
				> */}
				{/* <IoIosArrowUp /> */}
				{/* <span>2. Payement</span> */}
				{/* </div> */}
			</div>
			<div className={classes.grid}>
				{/* {type === 'checkout' ? <CheckoutForm /> : <PayementForm />} */}
				{<CheckoutForm />}
				<div>
					<Summary />
				</div>
			</div>
		</div>
	);
};

export default Checkout;
