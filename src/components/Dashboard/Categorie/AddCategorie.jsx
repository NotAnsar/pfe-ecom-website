import React, { useRef, useState } from 'react';

import classes from '../DashboardPage.module.scss';
import formClasses from '../../Forms/Form.module.scss';
import { useSelector } from 'react-redux';
import url from '../../../store/url';
import { useNavigate } from 'react-router-dom';

const AddCategorie = () => {
	const categorie = useRef(null);
	let navigate = useNavigate();
	const formHandler = (e) => {
		e.preventDefault();
		if (categorie.current.value.trim() === '') {
			alert('Fill Out The Field');
			return;
		}

		async function addCategorie() {
			try {
				const res = await fetch(`${url}/categories`, {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ categorie: categorie.current.value }),
				});

				const d = await res.json();

				alert(d.Result);
				navigate('/dashboard/categories');
			} catch (error) {
				console.log(error);
			}
		}
		addCategorie();
	};

	return (
		<div className={classes.right}>
			<h1>Add Categorie</h1>
			<div className={formClasses.container}>
				<div className={formClasses.formC}>
					<form id='checkoutForm' onSubmit={formHandler}>
						<div>
							<label htmlFor='name'>Categorie Name</label>
							<input type='text' ref={categorie} name='categorie' required />
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

export default AddCategorie;
