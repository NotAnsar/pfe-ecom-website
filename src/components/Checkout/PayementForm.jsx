import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import classes from './Form.module.scss';

const PayementForm = () => {
	const location = useLocation();
	const userData = location.state;

	const [formData, setFormData] = useState({
		numCard: '',
		expDate: '',
		cvc: '',
		nameOnCard: '',
	});

	const formHandler = (e) => {
		e.preventDefault();

		if (
			formData.numCard.trim() === '' ||
			formData.cvc.trim() === '' ||
			formData.nameOnCard.trim() === '' ||
			formData.expDate.trim() === ''
		) {
			alert('Fill Out All The Fields');
			return;
		}

		const [expYear, expMonth] = formData.expDate.split('-');
		const card = {
			numCard: formData.numCard,
			expYear,
			expMonth,
			cvc: formData.cvc,
			nameOnCard: formData.nameOnCard,
		};
		const data = {
			...userData,
			card,
		};
		console.log(data);
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
					<form id='payementForm' onSubmit={formHandler}>
						<label htmlFor='nameOnCard'>Name Of Cardholder</label>
						<input
							type='text'
							onChange={handleChange}
							name='nameOnCard'
							required
						/>

						<label htmlFor='numCard'>Card Number</label>
						<input
							type='text'
							onChange={handleChange}
							name='numCard'
							required
							maxLength='16'
							minLength='16'
						/>
						<div>
							<div className={classes.splitForm}>
								<div>
									<label htmlFor='expMonth'>EXPIRY DATE </label>
									<input
										type='month'
										onChange={handleChange}
										name='expDate'
										required
									/>
								</div>
								<div>
									<label htmlFor='cvc'>Cvc</label>
									<input
										type='text'
										onChange={handleChange}
										name='cvc'
										minLength='3'
										maxLength='3'
										required
									/>
								</div>
								{/* <input
                  type='text'
                  onChange={handleChange}
                  name='zcode'
                  minLength='3'
                  required
                /> */}
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default PayementForm;
