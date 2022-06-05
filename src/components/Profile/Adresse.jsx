import React, { useEffect, useState } from 'react';

import formClasses from '../Forms/Form.module.scss';
import classes from '../Dashboard/DashboardPage.module.scss';
import { useSelector } from 'react-redux';

const Adresse = () => {
	const { id } = useSelector((state) => state.auth);
	const url = 'http://127.0.0.1:8000/api';
	const [adrFound, setAdrFound] = useState(false);
	const [adresse, setAdresse] = useState({
		telephone: '',
		adresse: '',
		zipCode: '',
		ville: '',
		user_id: id,
	});

	useEffect(() => {
		getAdresse();
		async function getAdresse() {
			try {
				const res = await fetch(`${url}/adresses/${id}`);

				const adr = await res.json();

				setAdresse({
					telephone: adr.telephone,
					adresse: adr.adresse,
					zipCode: adr.zipCode,
					ville: adr.ville,
					user_id: id,
				});
				setAdrFound(true);
			} catch (error) {
				setAdrFound(false);
			}
		}
	}, []);

	// const [formData, setFormData] = useState({
	// 	telephone: adresse ? adresse.telephone : '',
	// 	adresse: adresse ? adresse.adresse : '',
	// 	zipCode: adresse ? adresse.zipCode : '',
	// 	ville: adresse ? adresse.ville : '',
	// });

	const formHandler = (e) => {
		e.preventDefault();

		if (
			adresse.adresse.trim() === '' ||
			adresse.telephone.trim() === '' ||
			adresse.ville.trim() === ''
		) {
			alert('Fill Out All The Fields');
			return;
		}

		async function addAdresse() {
			const req = await fetch(`${url}/adresses`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					telephone: adresse.telephone,
					adresse: adresse.adresse,
					zipCode: adresse.zipCode,
					ville: adresse.ville,
					user_id: adresse.user_id,
				}),
			});

			const res = await req.json();
			console.log(res);
			alert(res.Result);
		}

		async function updateAdresse() {
			const req = await fetch(`${url}/adresses`, {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					telephone: adresse.telephone,
					adresse: adresse.adresse,
					zipCode: adresse.zipCode,
					ville: adresse.ville,
					user_id: adresse.user_id,
				}),
			});

			const res = await req.json();
			alert(res.result);
		}
		if (adrFound) {
			updateAdresse();
		} else {
			addAdresse();
		}
	};

	const handleChange = (e) => {
		let value = e.target.value;
		let name = e.target.name;

		setAdresse((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className={classes.right}>
			<h1>Add Adresse</h1>
			<div className={formClasses.container}>
				<div className={formClasses.formC}>
					<form onSubmit={formHandler}>
						<label htmlFor='adresse'>Adresse</label>
						<textarea
							style={{ height: '100px' }}
							className={formClasses.textarea}
							defaultValue={adresse.adresse}
							name='adresse'
							onChange={handleChange}
						/>
						<div className={formClasses.splitForm}>
							<div>
								<label htmlFor='zipCode'>Zip code</label>
								<input
									defaultValue={adresse.zipCode}
									type='number'
									onChange={handleChange}
									name='zipCode'
									required
								/>
							</div>
							<div>
								<label htmlFor='telephone'>Telephone</label>
								<input
									defaultValue={adresse.telephone}
									type='tel'
									onChange={handleChange}
									name='telephone'
									required
								/>
							</div>
						</div>

						<label htmlFor='ville'>City</label>
						<input
							type='text'
							defaultValue={adresse.ville}
							onChange={handleChange}
							name='ville'
							required
						/>
						<div className={formClasses.btn}>
							<input
								type='Submit'
								defaultValue={`${
									adrFound ? 'Update Adresse' : 'Add Adresse'
								}  `}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Adresse;
