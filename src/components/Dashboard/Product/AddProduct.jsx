import React, { useState } from 'react';

import classes from '../DashboardPage.module.scss';
import formClasses from '../../Forms/Form.module.scss';
import { useSelector } from 'react-redux';

const AddProduct = () => {
	const { brands, categories } = useSelector((state) => state.products);
	const [formData, setFormData] = useState({
		name: '',
		price: '',
		desc: '',
		stock: '',
		image: '',
		categorieId: '',
		brandId: '',
	});

	const formHandler = (e) => {
		e.preventDefault();
		if (
			formData.name.trim() === '' ||
			formData.price.trim() === '' ||
			formData.desc.trim() === '' ||
			formData.stock.trim() === '' ||
			formData.image.trim() === '' ||
			formData.categorieId.trim() === '' ||
			formData.brandId.trim() === ''
		) {
			alert('Fill Out All The Fields');
			return;
		}

		const product = {
			name: formData.name,
			price: formData.price,
			desc: formData.desc,
			stock: formData.stock,
			image: formData.image,
			categorieId: formData.categorieId,
			brandId: formData.brandId,
		};
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
						<label htmlFor='desc'>Description</label>
						<input type='text' onChange={handleChange} name='desc' required />
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
								<label htmlFor='categorieId'>Categorie Id</label>
								<select name='categorieId' className={formClasses.select}>
									{categories.map((c) => (
										<option value={c.categorie_id}>{c.categorie}</option>
									))}
								</select>
							</div>
							<div>
								<label htmlFor='brandId'>Brand Id</label>
								<select name='brandId' className={formClasses.select}>
									{brands.map((c) => (
										<option value={c.brand_id}>{c.brand}</option>
									))}
								</select>
							</div>
						</div>
						<div className={formClasses.btn}>
							<input type='Submit' defaultValue='Add' form='payementForm' />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddProduct;
