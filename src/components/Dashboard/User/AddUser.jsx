import React, { useState } from 'react';

import classes from '../DashboardPage.module.scss';
import formClasses from '../../Forms/Form.module.scss';

const AddUser = () => {
	const [formData, setFormData] = useState({
		user_id: null,
		firstName: '',
		lastName: '',
		password: '',
		email: '',
		role: 'user',
	});

	const formHandler = (e) => {
		e.preventDefault();
		if (
			formData.firstName.trim() === '' ||
			formData.lastName.trim() === '' ||
			formData.password.trim() === '' ||
			formData.email.trim() === ''
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
	return (
		<div className={classes.right}>
			<h1>Add User</h1>
			<div className={formClasses.container}>
				<div className={formClasses.formC}>
					<form id='checkoutForm' onSubmit={formHandler}>
						<div className={formClasses.splitForm}>
							<div>
								<label htmlFor='firstName'>First Name</label>
								<input
									type='text'
									onChange={handleChange}
									name='firstName'
									required
								/>
							</div>
							<div>
								<label htmlFor='lastName'>Last Name</label>
								<input
									type='text'
									onChange={handleChange}
									name='lastName'
									required
								/>
							</div>
						</div>
						<label htmlFor='email'>Email</label>
						<input type='email' onChange={handleChange} name='email' required />
						<label htmlFor='Password'>Password</label>
						<input
							type='password'
							onChange={handleChange}
							name='password'
							minLength={6}
							required
						/>

						<div>
							<label htmlFor='categorie_id'>Role</label>
							<select
								name='role'
								onChange={handleChange}
								className={formClasses.select}
							>
								<option key={0} value={'user'}>
									user
								</option>
								<option key={1} value={'admin'}>
									admin
								</option>
							</select>
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

export default AddUser;
