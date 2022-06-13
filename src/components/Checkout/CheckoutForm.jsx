import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import { clearCarts } from '../../store/cartSlice';
import { setCheckoutDone } from '../../store/wishListSlice';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

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
	const [adresse, setAdresse] = useState(false);
	const [load, setload] = useState(false);
	const [orderId, setOrderId] = useState(false);
	const [orderAdded, setOrderAdded] = useState(false);
	const [error, setError] = useState(false);
	const [adresseAdded, setadresseAdded] = useState(false);

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
		console.log(load);
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
				setadresseAdded(true);
			} catch (error) {
				setAdrFound(false);
			}
		}

		if (!adrFound && adresse) addAdresse(adresse);
		async function addAdresse(adresse) {
			try {
				const req = await fetch(`${url}/adresses`, {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(adresse),
				});

				const res = await req.json();

				if (res.Result !== 'Data has been saved') setError(true);
				setAdresse(false);
				setAdrFound(true);
				setadresseAdded(true);
			} catch (error) {
				setError(true);
			}
		}

		if (
			adrFound &&
			adresseAdded &&
			!error &&
			adrFound &&
			orderId &&
			orderAdded &&
			adresseAdded
		) {
			dispatch(setCheckoutDone());
			dispatch(clearCarts());
			navigate('/order-confirmation', { state: { id: orderId } });
		}
	}, [
		error,
		loggedIn,
		adresse,
		orderId,
		adrFound,
		adresseAdded,
		orderAdded,
		adrFound,
		load,
	]);

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

		setAdresse();
		const created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');

		if (!adrFound) {
			setAdresse({
				telephone: formData.telephone,
				adresse: formData.adresse,
				zipCode: formData.zipCode,
				ville: formData.ville,
				user_id: id,
			});
		}

		const order = { created_at, user_id: id };
		const orderItem = cart.map((e) => ({
			product_id: e.product_id,
			quantity: e.qte,
		}));

		
		async function setOrder(order) {
			try {
				const res = await fetch(`${url}/orders`, {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(order),
				});

				if (!res.ok) throw Error('Cannot add order.');

				const { id } = await res.json();
				if (!id) setError(true);
				setOrderId(id);

				async function setOrderItems(dataa, id, bool) {
					try {
						let orderItemsResponse = await fetch(`${url}/order_items`, {
							method: 'POST',
							headers: {
								Accept: 'application/json',
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({ ...dataa, order_id: id }),
						});

						const data = await orderItemsResponse.json();

						if (bool) setload(false);
						setOrderAdded(bool);
					} catch (error) {
						setload(false);
						setError(true);
					}
				}
				orderItem.forEach((order, i, o) => {
					setOrderItems(order, id, i === o.length - 1);
				});
			} catch (error) {
				setload(false);
				setError(true);
			}
		}
		setOrder(order);

		setload(false);
	};

	const handleChange = (e) => {
		let value = e.target.value;
		let name = e.target.name;

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<Fragment>
			{load && (
				<div className={classes.drop}>
					<div className='load'>
						<AiOutlineLoading3Quarters />
					</div>
				</div>
			)}
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
		</Fragment>
	);
};

export default CheckoutForm;
