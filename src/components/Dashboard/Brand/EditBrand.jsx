import React, { useRef, useState } from 'react';

import classes from '../DashboardPage.module.scss';
import formClasses from '../../Forms/Form.module.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const EditBrand = () => {
	const { brands } = useSelector((state) => state.products);
	const { id } = useParams();
	let data = null;

	if (brands.length !== 0) data = brands?.find((d) => d.brand_id === +id);
	const brand = useRef(null);

	const formHandler = (e) => {
		e.preventDefault();
		if (brand.current.value.trim() === '') {
			alert('fill the field');
			return;
		}

		console.log(brand.current.value);
	};

	if (data === null) return <p>Loading</p>;

	return (
		<div className={classes.right}>
			<h1>Edit Brand</h1>
			<div className={formClasses.container}>
				<div className={formClasses.formC}>
					<form id='checkoutForm' onSubmit={formHandler}>
						<div>
							<label htmlFor='name'>Brand Name</label>
							<input
								ref={brand}
								defaultValue={data.brand}
								type='text'
								name='name'
								required
							/>
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

export default EditBrand;
