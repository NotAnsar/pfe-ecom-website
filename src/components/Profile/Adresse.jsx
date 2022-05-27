import React, { useState } from 'react';

import formClasses from '../Forms/Form.module.scss';
import classes from '../Dashboard/DashboardPage.module.scss';
import { useSelector } from 'react-redux';
const Adresse = () => {
	const [formData, setFormData] = useState({
		telephone: '',
		adresse: '',
		zipCode: '',
		ville: '',
	});

	const formHandler = (e) => {
		e.preventDefault();
		if (
			formData.adresse.trim() === '' ||
			formData.zipCode.trim() === '' ||
			formData.ville.trim() === ''
		) {
			alert('Fill Out All The Fields');
			return;
		}

		const adresse = {
			telephone: formData.telephone,
			adresse: formData.adresse,
			zipCode: formData.zipCode,
			ville: formData.ville,
			id: id,
		};
		console.log(adresse);
	};

	const handleChange = (e) => {
		let value = e.target.value;
		let name = e.target.name;

		setFormData((prev) => ({ ...prev, [name]: value }));
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
							defaultValue={formData.adresse}
							name='adresse'
						/>
						<div className={formClasses.splitForm}>
							<div>
								<label htmlFor='zipCode'>Zip code</label>
								<input
									defaultValue={formData.zipCode}
									type='number'
									onChange={handleChange}
									name='zipCode'
									required
								/>
							</div>
							<div>
								<label htmlFor='telephone'>Telephone</label>
								<input
									defaultValue={formData.telephone}
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
							defaultValue={formData.ville}
							onChange={handleChange}
							name='ville'
							required
						/>
						<div className={formClasses.btn}>
							<input type='Submit' defaultValue='Add Adresse' />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Adresse;
