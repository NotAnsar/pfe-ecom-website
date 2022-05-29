import React, { useRef, useState } from 'react';

import classes from '../DashboardPage.module.scss';
import formClasses from '../../Forms/Form.module.scss';
import { useSelector } from 'react-redux';

const AddBrand = () => {
	const brand = useRef(null);

	const formHandler = (e) => {
		e.preventDefault();
		if (brand.current.value.trim() === '') {
			alert('Fill Out The Field');
			return;
		}

		console.log(brand.current.value);
	};

	return (
		<div className={classes.right}>
			<h1>Add Brand</h1>
			<div className={formClasses.container}>
				<div className={formClasses.formC}>
					<form id='checkoutForm' onSubmit={formHandler}>
						<div>
							<label htmlFor='name'>Brand Name</label>
							<input type='text' ref={brand} name='brand' required />
						</div>

						<div className={formClasses.btn}>
							<input type='Submit' defaultValue='Add' />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddBrand;
