import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from '../DashboardPage.module.scss';
import { FiEdit } from 'react-icons/fi';

const Categories = () => {
	const { categories } = useSelector((state) => state.products);
	console.log(categories);

	return (
		<div className={classes.right}>
			<div className={classes.dashtitle}>
				<h1>Categories</h1>
				<Link to='add'>Add</Link>
			</div>
			<table className={classes.table}>
				<thead>
					<tr>
						<th>#</th>
						<th>Categorie Name</th>
						<th>
							<FiEdit />
						</th>
					</tr>
				</thead>
				<tbody>
					{!categories.length === 0 && (
						<div className='loading'>
							<img src='./images/loading.gif' />
						</div>
					)}
					{categories &&
						categories.map((b) => {
							return (
								<tr key={b.categorie_id}>
									<td>{b.categorie_id}</td>
									<td>{b.categorie}</td>
									<td>
										<Link to={`edit/${b.categorie_id}`}>
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

export default Categories;
