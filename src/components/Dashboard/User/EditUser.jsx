import React, { useEffect, useState } from 'react';

import classes from '../DashboardPage.module.scss';
import formClasses from '../../Forms/Form.module.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const EditUser = () => {
	const { id } = useParams();

	const [users, setUsers] = useState(null);

	useEffect(() => {
		const getUser = async () => {
			try {
				const res = await fetch(`http://127.0.0.1:8000/api/users/${id}`);
				const data = await res.json();

				setUsers(data);
			} catch (error) {
				setUsers([]);
			}
		};
		getUser();
	}, []);

	const formHandler = (e) => {
		e.preventDefault();
		if (
			users.firstName.trim() === '' ||
			users.lastName.trim() === '' ||
			users.password.trim() === '' ||
			users.email.trim() === ''
		) {
			alert('Fill Out All The Fields');
			return;
		}

		const user = {
			firstName: users.firstName,
			lastName: users.lastName,
			password: users.password,
			email: users.email,
			role: users.role,
		};
		console.log(user);
	};

	const handleChange = (e) => {
		let value = e.target.value;
		let name = e.target.name;

		setUsers((prev) => ({ ...prev, [name]: value }));
	};

	if (users === null)
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
			<h1>Edit User</h1>
			<div className={formClasses.container}>
				<div className={formClasses.formC}>
					<form id='checkoutForm' onSubmit={formHandler}>
						<div className={formClasses.splitForm}>
							<div>
								<label htmlFor='firstName'>First Name</label>
								<input
									defaultValue={users.firstName}
									type='text'
									onChange={handleChange}
									name='firstName'
									required
								/>
							</div>
							<div>
								<label htmlFor='lastName'>Last Name</label>
								<input
									defaultValue={users.lastName}
									type='text'
									onChange={handleChange}
									name='lastName'
									required
								/>
							</div>
						</div>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							defaultValue={users.email}
							onChange={handleChange}
							name='email'
							required
						/>

						<div>
							<label htmlFor='categorie_id'>role</label>
							<select
								name='role'
								onChange={handleChange}
								className={formClasses.select}
								value={users.role}
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

export default EditUser;
