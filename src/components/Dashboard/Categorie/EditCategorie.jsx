import React, { useEffect, useRef, useState } from 'react';

import classes from '../DashboardPage.module.scss';
import formClasses from '../../Forms/Form.module.scss';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import url from '../../../store/url';

const EditCategorie = () => {
	const { id } = useParams();
	let navigate = useNavigate();
	const [categories, setCategories] = useState(null);

	useEffect(() => {
		const getCategories = async () => {
			try {
				const res = await fetch(`${url}/categories/${id}`);
				const data = await res.json();

				setCategories(data);
			} catch (error) {
				setCategories([]);
			}
		};
		getCategories();
	}, []);

	const categorie = useRef(null);

	const formHandler = (e) => {
		e.preventDefault();
		if (categorie.current.value.trim() === '') {
			alert('fill the field');
			return;
		}

		async function updateCategorie() {
			try {
				console.log(
					JSON.stringify({
						categorie_id: id,
						categorie: categorie.current.value,
					})
				);

				const res = await fetch(`${url}/categories`, {
					method: 'PUT',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						categorie_id: id,
						categorie: categorie.current.value,
					}),
				});

				const d = await res.json();

				console.log(d);
				alert(d.result);
				navigate('/dashboard/categories');
			} catch (error) {
				console.log(error);
			}
		}
		updateCategorie();
	};

	if (categories === null)
		return (
			<div className={classes.right}>
				<div className='load'>
					{/* <FiLoader /> */}
					<AiOutlineLoading3Quarters />
				</div>
			</div>
		);

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
								defaultValue={categories.categorie}
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
