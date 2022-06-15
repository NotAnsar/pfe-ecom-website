import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from '../DashboardPage.module.scss';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Products = () => {
	const { products } = useSelector((state) => state.products);

	return (
		<div className={classes.right}>
			<div className={classes.dashtitle}>
				<h1>Products</h1>
				<Link to='add'>Add</Link>
			</div>
			<table className={classes.table}>
				<thead>
					<tr>
						<th>#</th>
						<th>Image</th>
						<th>Name</th>
						<th>BId</th>
						<th>CId</th>
						<th>Description</th>
						<th>Price</th>
						<th>Stock</th>

						<th>
							<FiEdit />
						</th>
					</tr>
				</thead>
				<tbody>
					{!products.length === 0 && (
						<div className={classes.right}>
							<div className='load'>
								{/* <FiLoader /> */}
								<AiOutlineLoading3Quarters />
							</div>
						</div>
					)}
					{products &&
						products.map((p) => {
							return (
								<tr key={p.product_id}>
									<td>{p.product_id}</td>
									<td>
										<img
											src={`http://localhost:3000/images/${p.image}`}
											alt={p.name}
										/>
									</td>
									<td>{p.name}</td>
									<td>{p.brand_id}</td>
									<td>{p.categorie_id}</td>
									<td>{p.description.split(' ').slice(0, 3).join(' ')}...</td>
									<td>{p.price}</td>
									<td>{p.stock}</td>
									<td>
										<Link to={`edit/${p.product_id}`}>
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

export default Products;
