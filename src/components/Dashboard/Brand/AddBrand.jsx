import React, { useRef, useState } from 'react';

import classes from '../DashboardPage.module.scss';
import formClasses from '../../Forms/Form.module.scss';
import { useSelector } from 'react-redux';
import url from '../../../store/url';
import { useNavigate } from 'react-router-dom';

const AddBrand = () => {
	const brand = useRef(null);
	let navigate = useNavigate();
	const formHandler = (e) => {
		e.preventDefault();
		if (brand.current.value.trim() === '') {
			alert('Fill Out The Field');
			return;
		}

		async function addBrand() {
			try {
				const res = await fetch(`${url}/brands`, {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ brand: brand.current.value }),
				});

				const d = await res.json();

				alert(d.Result);
				navigate('/dashboard/brands');
			} catch (error) {
				console.log(error);
			}
		}
		addBrand();
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
