import React, { useState } from 'react';

import classes from '../DashboardPage.module.scss';
import formClasses from '../../Forms/Form.module.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
	const { products, brands, categories } = useSelector(
		(state) => state.products
	);
	const { id } = useParams();
	let data = null;
	if (products.length !== 0) {
		data = products?.find((d) => d.product_id === +id);
		console.log(data);
	}
	console.log(id);
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
	if (data === null) return <p>Loading</p>;
	return (
		<div className={classes.right}>
			<h1>Edit Product</h1>
			<div className={formClasses.container}>
				<div className={formClasses.formC}>
					<form id='checkoutForm' onSubmit={formHandler}>
						<div className={formClasses.splitForm}>
							<div>
								<label htmlFor='name'>Product Name</label>
								<input
									defaultValue={data.name}
									type='text'
									onChange={handleChange}
									name='name'
									required
								/>
							</div>
							<div>
								<label htmlFor='price'>Price</label>
								<input
									defaultValue={data.price}
									type='number'
									onChange={handleChange}
									name='price'
									required
								/>
							</div>
						</div>
						<label htmlFor='desc'>Description</label>
						{/* <input
							type='text'
							value={data.description}
							onChange={handleChange}
							name='desc'
							required
						/> */}

						<textarea
							className={formClasses.textarea}
							defaultValue={data.description}
							name='desc'
						/>

						<label htmlFor='stock'>Stock</label>
						<input
							type='number'
							defaultValue={data.stock}
							onChange={handleChange}
							name='stock'
							min='1'
							required
						/>
						<label htmlFor='image'>Image</label>
						<input
							// value={data.image}
							type='file'
							onChange={handleChange}
							name='image'
							minLength='6'
							required
						/>
						<div className={formClasses.splitForm}>
							<div>
								<label htmlFor='categorieId'>Categorie Id</label>
								<select
									name='categorieId'
									defaultValue={data.categorie_id}
									className={formClasses.select}
									onChange={handleChange}
								>
									{categories.map((c) => (
										<option key={c.categorie_id} value={c.categorie_id}>
											{c.categorie}
										</option>
									))}
								</select>
							</div>
							<div>
								<label htmlFor='brandId'>Brand Id</label>
								<select
									name='brandId'
									defaultValue={data.brand_id}
									className={formClasses.select}
									onChange={handleChange}
								>
									{brands.map((c) => (
										<option value={c.brand_id} key={c.brand_id}>
											{c.brand}
										</option>
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

export default EditProduct;
