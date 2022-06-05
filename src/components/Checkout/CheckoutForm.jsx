import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCheckoutDone } from '../../store/wishListSlice';

import classes from './Form.module.scss';

const CheckoutForm = () => {
	const { cart, total } = useSelector((state) => state.storageSlice);
	const { id, lastName, firstName, email, loggedIn } = useSelector(
		(state) => state.auth
	);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const url = 'http://127.0.0.1:8000/api';
	const [adrFound, setAdrFound] = useState(false);

	const [formData, setFormData] = useState({
		email,
		firstName,
		lastName,
		user_id: id,
		telephone: '',
		adresse: '',
		zipCode: '',
		ville: '',
		country: 'morocco',
	});

	useEffect(() => {
		if (loggedIn) getAdresse();
		async function getAdresse() {
			try {
				const res = await fetch(`${url}/adresses/${id}`);

				const adr = await res.json();

				setFormData((prev) => ({
					...prev,
					telephone: adr.telephone,
					adresse: adr.adresse,
					zipCode: adr.zipCode,
					ville: adr.ville,
				}));

				setAdrFound(true);
			} catch (error) {
				setAdrFound(false);
			}
		}
	}, []);

	const formHandler = (e) => {
		e.preventDefault();
		if (
			formData.email.trim() === '' ||
			formData.firstName.trim() === '' ||
			formData.lastName.trim() === '' ||
			formData.telephone.trim() === '' ||
			formData.adresse.trim() === '' ||
			formData.ville.trim() === ''
		) {
			alert('Fill Out All The Fields');
			return;
		}

		dispatch(setCheckoutDone());
		const created_at = new Date().toISOString();

		const commands = cart.map((e) => ({
			product_id: e.product_id,
			user_id: id,
			created_at,
			quantity: e.qte,
		}));

		console.log(commands);

		const user = {
			user: {
				email: formData.email,
				firstName: formData.firstName,
				lastName: formData.lastName,
				user_id: id,
			},
			adresse: {
				telephone: formData.telephone,
				adresse: formData.adresse,
				ville: formData.ville,
				user_id: id,
				zipCode: formData.zipCode,
			},
			commands,
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
								<label htmlFor='firstName'>First Name</label>
								<input
									type='text'
									onChange={handleChange}
									name='firstName'
									required
									defaultValue={formData.firstName}
									disabled
								/>
							</div>
							<div>
								<label htmlFor='lastName'>Last Name</label>
								<input
									type='text'
									onChange={handleChange}
									name='lastName'
									defaultValue={formData.lastName}
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
						<label htmlFor='telephone'>Mobile Telephone</label>
						<input
							type='tel'
							onChange={handleChange}
							name='telephone'
							maxLength='10'
							minLength='10'
							defaultValue={formData.telephone}
							required
							disabled={adrFound ? 'disabled' : ''}
						/>
						<label htmlFor='adresse'>Adresse</label>
						<input
							type='text'
							onChange={handleChange}
							defaultValue={formData.adresse}
							name='adresse'
							minLength='6'
							required
							disabled={adrFound ? 'disabled' : ''}
						/>
						<div className={classes.splitForm}>
							<div>
								<label htmlFor='ville'>City</label>
								<input
									type='text'
									onChange={handleChange}
									defaultValue={formData.ville}
									name='ville'
									minLength='3'
									required
									disabled={adrFound ? 'disabled' : ''}
								/>
							</div>
							<div>
								<label htmlFor='zipCode'>Zip Code</label>
								<input
									type='number'
									onChange={handleChange}
									defaultValue={formData.zipCode}
									name='zipCode'
									minLength='3'
									required
									disabled={adrFound ? 'disabled' : ''}
								/>
							</div>
						</div>

						<label htmlFor='country'>Country</label>
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
