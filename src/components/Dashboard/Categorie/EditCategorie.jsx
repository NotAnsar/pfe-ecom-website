import React, { useRef, useState } from 'react';

import classes from '../DashboardPage.module.scss';
import formClasses from '../../Forms/Form.module.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const EditCategorie = () => {
	const { categories } = useSelector((state) => state.products);
	const { id } = useParams();
	let data = null;

	if (categories.length !== 0)
		data = categories?.find((d) => d.categorie_id === +id);
	const categorie = useRef(null);

	const formHandler = (e) => {
		e.preventDefault();
		if (categorie.current.value.trim() === '') {
			alert('fill the field');
			return;
		}

		console.log(categorie.current.value);
	};

	if (data === null) return <p>Loading</p>;

	return (
		<div className={classes.right}>
			<h1>Edit Categorie</h1>
			<div className={formClasses.container}>
				<div className={formClasses.formC}>
					<form id='checkoutForm' onSubmit={formHandler}>
						<div>
							<label htmlFor='name'>Categorie Name</label>
							<input
								ref={categorie}
								defaultValue={data.categorie}
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

export default EditCategorie;
