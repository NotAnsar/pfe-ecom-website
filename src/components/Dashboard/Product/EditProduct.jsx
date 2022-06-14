import React, { useEffect, useState } from 'react';

import classes from '../DashboardPage.module.scss';
import formClasses from '../../Forms/Form.module.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const EditProduct = () => {
	const { products, brands, categories } = useSelector(
		(state) => state.products
	);
	const { id } = useParams();
	const [data, setData] = useState(null);

	if (products.length !== 0 && data === null) {
		setData(products?.find((d) => d.product_id === +id));
	}

	const [formData, setFormData] = useState({
		name: '',
		price: '',
		description: '',
		stock: '',
		image: '',
		categorie_id: '',
		brand_id: '',
	});
	useEffect(() => {
		if (data) {
			setFormData({
				name: data.name,
				price: data.price,
				description: data.description,
				stock: data.stock,
				image: data.image,
				categorie_id: data.categorie_id,
				brand_id: data.brand_id,
			});
		}
	}, [data]);
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

		console.log(formData);
	};

	const handleChange = (e) => {
		let value = e.target.value;
		let name = e.target.name;

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	if (data === null)
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
						<label htmlFor='description'>Description</label>

						<textarea
							className={formClasses.textarea}
							defaultValue={data.description}
							onChange={handleChange}
							name='description'
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
							// defaultValue={data.image}
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
								<label htmlFor='brand_id'>Brand Id</label>
								<select
									name='brand_id'
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
							<input type='Submit' defaultValue='Add' />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditProduct;
