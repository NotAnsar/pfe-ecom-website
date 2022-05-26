import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCheckoutDone } from '../../store/wishListSlice';

import classes from './Form.module.scss';

const CheckoutForm = () => {
	const { cart, total } = useSelector((state) => state.storageSlice);
	const { id, lastname, firstname, email } = useSelector((state) => state.auth);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	console.log(id, lastname, firstname, email);
	const [formData, setFormData] = useState({
		email,
		fName: firstname,
		lName: lastname,
		phone: '',
		country: 'morocco',
		adresse: '',
		city: '',
		zcode: '',
	});

	const formHandler = (e) => {
		e.preventDefault();
		if (
			formData.email.trim() === '' ||
			formData.fName.trim() === '' ||
			formData.lName.trim() === '' ||
			formData.phone.trim() === '' ||
			formData.country.trim() === '' ||
			formData.adresse.trim() === '' ||
			formData.city.trim() === '' ||
			formData.zcode.trim() === ''
		) {
			alert('Fill Out All The Fields');
			return;
		}
		dispatch(setCheckoutDone());

		const adresse = {
			telephone: formData.phone,
			adresse: formData.adresse,
			ville: formData.city,
			user_id: id,
			zipCode: formData.zcode,
		};

		const user = {
			email: formData.email,
			fName: formData.fName,
			lName: formData.lName,
			adresse,
			at: new Date().toISOString(),
			bought: cart,
			total,
		};
		navigate('/payement', { state: user });
	};

	const handleChange = (e) => {
		let value = e.target.value;
		let name = e.target.name;

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className={classes.login}>
			<div className={classes.container}>
				<div className={classes.formC}>
					<form id='checkoutForm' onSubmit={formHandler}>
						<div className={classes.splitForm}>
							<div>
								<label htmlFor='fName'>First Name</label>
								<input
									type='text'
									onChange={handleChange}
									name='fName'
									required
									defaultValue={formData.fName}
									disabled
								/>
							</div>
							<div>
								<label htmlFor='lName'>Last Name</label>
								<input
									type='text'
									onChange={handleChange}
									name='lName'
									defaultValue={formData.lName}
									disabled
									required
								/>
							</div>
						</div>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							onChange={handleChange}
							name='email'
							required
							defaultValue={formData.email}
							disabled
						/>
						<label htmlFor='phone'>Mobile Telephone</label>
						<input
							type='tel'
							onChange={handleChange}
							name='phone'
							maxLength='10'
							minLength='10'
							defaultValue={formData.phone}
							required
						/>
						<label htmlFor='adresse'>Adresse</label>
						<input
							type='text'
							onChange={handleChange}
							defaultValue={formData.adresse}
							name='adresse'
							minLength='6'
							required
						/>
						<div className={classes.splitForm}>
							<div>
								<label htmlFor='city'>City</label>
								<input
									type='text'
									onChange={handleChange}
									defaultValue={formData.city}
									name='city'
									minLength='3'
									required
								/>
							</div>
							<div>
								<label htmlFor='zcode'>Zip Code</label>
								<input
									type='number'
									onChange={handleChange}
									defaultValue={formData.zcode}
									name='zcode'
									minLength='3'
									required
								/>
							</div>
						</div>

						<label htmlFor='city'>Country</label>
						<input
							type='text'
							onChange={handleChange}
							name='country'
							defaultValue='Morocco'
							disabled
							required
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CheckoutForm;
