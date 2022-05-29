import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from '../DashboardPage.module.scss';
import { FiEdit } from 'react-icons/fi';

const Brands = () => {
	const { brands } = useSelector((state) => state.products);

	return (
		<div className={classes.right}>
			<div className={classes.dashtitle}>
				<h1>Brands</h1>
				<Link to='add'>Add</Link>
			</div>
			<table className={classes.table}>
				<thead>
					<tr>
						<th>#</th>
						<th>Brand Name</th>
						<th>
							<FiEdit />
						</th>
					</tr>
				</thead>
				<tbody>
					{!brands.length === 0 && (
						<div className='loading'>
							<img src='./images/loading.gif' />
						</div>
					)}
					{brands &&
						brands.map((b) => {
							return (
								<tr key={b.brand_id}>
									<td>{b.brand_id}</td>
									<td>{b.brand}</td>
									<td>
										<Link to={`edit/${b.brand_id}`}>
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

export default Brands;
