import React, { useEffect, useRef, useState } from 'react';

import classes from '../DashboardPage.module.scss';
import formClasses from '../../Forms/Form.module.scss';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import url from '../../../store/url';

const EditBrand = () => {
	const { id } = useParams();
	let navigate = useNavigate();
	const [brands, setBrands] = useState(null);

	useEffect(() => {
		const getBrands = async () => {
			try {
				const res = await fetch(`${url}/brands/${id}`);
				const data = await res.json();

				setBrands(data);
			} catch (error) {
				setBrands([]);
			}
		};
		getBrands();
	}, []);

	const brand = useRef(null);

	const formHandler = (e) => {
		e.preventDefault();
		if (brand.current.value.trim() === '') {
			alert('fill the field');
			return;
		}

		async function updateBrand() {
			try {
				const res = await fetch(`${url}/brands`, {
					method: 'PUT',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ brand_id: id, brand: brand.current.value }),
				});

				const d = await res.json();

				alert(d.result);
				navigate('/dashboard/brands');
			} catch (error) {
				console.log(error);
			}
		}
		updateBrand();
	};

	if (brands === null)
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
			<h1>Edit Brand</h1>
			<div className={formClasses.container}>
				<div className={formClasses.formC}>
					<form id='checkoutForm' onSubmit={formHandler}>
						<div>
							<label htmlFor='name'>Brand Name</label>
							<input
								ref={brand}
								defaultValue={brands.brand}
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
