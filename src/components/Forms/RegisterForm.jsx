import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Register } from '../../store/authentication';

import classes from './Form.module.scss';

const RegisterForm = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		cpassword: '',
		fName: '',
		lName: '',
		role: 'user',
	});
	const dispatch = useDispatch();
	const { loggedIn, role } = useSelector((state) => state.auth);
	let navigate = useNavigate();

	useEffect(() => {
		if (loggedIn && role === 'user') navigate('/profile');
	}, [loggedIn]);

	const formHandler = (e) => {
		e.preventDefault();

		if (
			!formData.email.includes('@') ||
			!formData.password.length > 6 ||
			formData.cpassword !== formData.password ||
			formData.fName.trim() === '' ||
			formData.lName.trim() === '' ||
			formData.role !== 'user'
		)
			return;

		dispatch(
			Register(
				formData.email.trim(),
				formData.password.trim(),
				formData.fName.trim(),
				formData.lName.trim(),
				formData.role
			)
		);
	};
	const handleChange = (e) => {
		let value = e.target.value;
		let name = e.target.name;

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className={classes.login}>
			<div className={classes.container}>
				<div className={classes.form}>
					<form onSubmit={formHandler}>
						<div className={classes.splitForm}>
							<div>
								<label htmlFor='fName'>First Name</label>
								<input
									type='text'
									onChange={handleChange}
									name='fName'
									required
								/>
							</div>
							<div>
								<label htmlFor='lName'>Last Name</label>
								<input
									type='text'
									onChange={handleChange}
									name='lName'
									required
								/>
							</div>
						</div>
						<label htmlFor='email'>Email</label>
						<input type='text' onChange={handleChange} name='email' required />
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							onChange={handleChange}
							name='password'
							minLength='6'
							required
						/>
						<label htmlFor='cpassword'>Confirm Password</label>
						<input
							type='password'
							onChange={handleChange}
							name='cpassword'
							minLength='6'
							required
						/>
						<input type='Submit' placeholder='Login Now' />
					</form>
					<div className={classes.newUser}>
						<Link to='/login'>Already have an account ?</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterForm;
