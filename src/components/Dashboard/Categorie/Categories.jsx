import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import classes from '../DashboardPage.module.scss';
import { FiEdit } from 'react-icons/fi';
import url from '../../../store/url';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Categories = () => {
	const [categories, setCategories] = useState(null);

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});

		async function getCategories() {
			try {
				const res = await fetch(`${url}/categories`);

				const prd = await res.json();
				setCategories(prd);
			} catch (error) {}
		}
		getCategories();
	}, []);

	if (categories === null)
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
