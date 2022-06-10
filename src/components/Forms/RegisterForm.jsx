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
	const { loggedIn, role, error, errorMsg } = useSelector(
		(state) => state.auth
	);
	const [errorr, setError] = useState({ error: false, message: '' });
	let navigate = useNavigate();

	useEffect(() => {
		if (loggedIn && role === 'user') navigate('/profile');
		if (error) {
			setError({ error: error, message: errorMsg });
		}
	}, [loggedIn, error, errorMsg]);

	const formHandler = (e) => {
		e.preventDefault();

		if (
			!formData.email.includes('@') ||
			!formData.password.length > 6 ||
			formData.fName.trim() === '' ||
			formData.lName.trim() === '' ||
			formData.role !== 'user' ||
			formData.cpassword !== formData.password
		) {
			if (formData.cpassword !== formData.password)
				setError({ error: true, message: 'Passwords must match' });

			return;
		}

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
				{errorr.error && <p className={classes.alert}>{errorr.message}.</p>}
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
						<input
							type='text'
							pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
							onChange={handleChange}
							name='email'
							required
						/>
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
