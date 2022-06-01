import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import classes from '../DashboardPage.module.scss';

import { FiLoader, FiEdit } from 'react-icons/fi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Users = () => {
	const [users, setUsers] = useState(null);
	const [url, setUrl] = useState('http://127.0.0.1:8000/api/users');

	useEffect(() => {
		const getUser = async () => {
			try {
				const res = await fetch('http://127.0.0.1:8000/api/users');
				const data = await res.json();
				const lastPage = data.last_page;
				console.log(data);
				console.log(lastPage);
				console.log(data.next_page_url);
				setUsers(data.data);
				setUrl(data.next_page_url);
			} catch (error) {
				setUsers([]);
			}
		};
		getUser();
	}, []);

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
			<div className={classes.dashtitle}>
				<h1>Users</h1>
				<Link to='add'>Add</Link>
			</div>
			<table className={classes.table}>
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Role</th>

						<th>
							<FiEdit />
						</th>
					</tr>
				</thead>
				<tbody>
					{!users.length === 0 && (
						<div className='loading'>
							<img src='./images/loading.gif' />
						</div>
					)}
					{users &&
						users.map((p) => {
							return (
								<tr key={p.user_id}>
									<td>{p.user_id}</td>

									<td>{p.firstName}</td>
									<td>{p.lastName}</td>
									<td>{p.email}</td>
									<td>{p.role}</td>
									<td>
										<Link to={`edit/${p.user_id}`}>
											<FiEdit />
										</Link>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default Users;
