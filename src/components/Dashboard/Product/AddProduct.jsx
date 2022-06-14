import React, { useState } from 'react';

import classes from '../DashboardPage.module.scss';
import formClasses from '../../Forms/Form.module.scss';
import { useSelector } from 'react-redux';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
const AddProduct = () => {
	const { brands, categories } = useSelector((state) => state.products);
	const [formData, setFormData] = useState({
		name: '',
		price: '',
		description: '',
		stock: '',
		image: '',
		categorie_id: 0,
		brand_id: 0,
	});

	const formHandler = (e) => {
		e.preventDefault();
		if (
			formData.name.trim() === '' ||
			formData.description.trim() === '' ||
			formData.image.trim() === ''
		) {
			alert('Fill Out All The Fields');
			return;
		}
		if (formData.categorie_id === 0 || formData.brand_id === 0) {
			alert('Choose a categorie or brand');
			return;
		}

		console.log(formData);
	};

	const handleChange = (e) => {
		let value = e.target.value;
		let name = e.target.name;

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className={classes.right}>
			<h1>Add Product</h1>
			<div className={formClasses.container}>
				<div className={formClasses.formC}>
					<form id='checkoutForm' onSubmit={formHandler}>
						<div className={formClasses.splitForm}>
							<div>
								<label htmlFor='name'>Product Name</label>
								<input
									type='text'
									onChange={handleChange}
									name='name'
									required
								/>
							</div>
							<div>
								<label htmlFor='price'>Price</label>
								<input
									type='number'
									onChange={handleChange}
									name='price'
									required
								/>
							</div>
						</div>
						<label htmlFor='description'>Description</label>
						<input
							type='text'
							onChange={handleChange}
							name='description'
							required
						/>
						<label htmlFor='stock'>Stock</label>
						<input
							type='number'
							onChange={handleChange}
							name='stock'
							min='1'
							required
						/>
						<label htmlFor='image'>Image</label>
						<input
							type='file'
							onChange={handleChange}
							name='image'
							minLength='6'
							required
						/>
						<div className={formClasses.splitForm}>
							<div>
								<label htmlFor='categorie_id'>Categorie Id</label>
								<select
									name='categorie_id'
									onChange={handleChange}
									className={formClasses.select}
								>
									<option key={0} value={0}>
										Choose
									</option>
									{categories.map((c) => (
										<option key={c.categorie_id} value={c.categorie_id}>
											{c.categorie}
										</option>
									))}
								</select>
							</div>
							<div>
								<label htmlFor='brand_id'>Brand Id</label>
								<select
									name='brand_id'
									onChange={handleChange}
									className={formClasses.select}
								>
									<option key={0} value={0}>
										Choose
									</option>
									{brands.map((c) => (
										<option value={c.brand_id} key={c.brand_id}>
											{c.brand}
										</option>
									))}
								</select>
							</div>
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

export default AddProduct;
