import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import classes from '../DashboardPage.module.scss';
import paginationclasses from '../../ShopPage/ShopItem.module.scss';

import { FiLoader, FiEdit } from 'react-icons/fi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import url from '../../../store/url';

const Users = () => {
	const [users, setUsers] = useState(null);
	const [pageNum, setPageNum] = useState(0);

	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		async function getUsers(page = 1) {
			try {
				const res = await fetch(`${url}/users?page=${page}`);

				const prd = await res.json();
				setPageNum(prd.last_page);
				setUsers(prd.data);
			} catch (error) {}
		}
		getUsers(currentPage);
	}, [currentPage]);

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
			<div className={paginationclasses.pagination}>
				{users && pageNum > 0 && (
					<span className={paginationclasses.page}>
						<FiChevronLeft
							onClick={() => {
								if (currentPage !== 1) return setCurrentPage(currentPage - 1);
							}}
						/>
						<p
							className={paginationclasses.pagenum}
						>{`${currentPage}/${pageNum}`}</p>
						<FiChevronRight
							onClick={() => {
								if (currentPage < pageNum)
									return setCurrentPage(currentPage + 1);
							}}
						/>
					</span>
				)}
			</div>
		</div>
	);
};

export default Users;
