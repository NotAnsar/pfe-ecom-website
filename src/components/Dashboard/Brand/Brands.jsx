import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import classes from '../DashboardPage.module.scss';
import { FiEdit } from 'react-icons/fi';
import url from '../../../store/url';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Brands = () => {
	const [brands, setBrands] = useState(null);

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});

		async function getBrands() {
			try {
				const res = await fetch(`${url}/brands`);

				const prd = await res.json();
				setBrands(prd);
			} catch (error) {}
		}
		getBrands();
	}, []);

	if (brands === null)
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
