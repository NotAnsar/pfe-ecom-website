import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import classes from '../Dashboard/DashboardPage.module.scss';
import formClasses from '../Forms/Form.module.scss';
export const ProfileInfo = () => {
	const { email, firstName, lastName } = useSelector((state) => state.auth);

	return (
		<div className={classes.right}>
			<h1>My Profile</h1>
			<div className={formClasses.container}>
				<div className={formClasses.formC}>
					<form>
						<div className={formClasses.splitForm}>
							<div>
								<label htmlFor='name'>First Name</label>
								<input
									value={firstName}
									type='text'
									name='firstName'
									required
									disabled
								/>
							</div>
							<div>
								<label htmlFor='price'>Last Name</label>
								<input
									value={lastName}
									type='text'
									name='lastName'
									required
									disabled
								/>
							</div>
						</div>

						<label htmlFor='stock'>Email</label>
						<input type='text' value={email} name='email' required disabled />
					</form>
				</div>
			</div>
		</div>
	);
};
