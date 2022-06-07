import React from 'react';
import classes from './ShopItem.module.scss';

const ShopHeader = ({ getSort }) => {
	const handleChange = (e) => {
		let value = e.target.value;

		getSort(value.split(' '));
	};

	return (
		<div className={classes.shopAll}>
			<h1>Shop All</h1>
			<div className={classes.sortBy}>
				<div className={classes.sortBy}>
					<select
						defaultValue={''}
						onChange={handleChange}
						className={classes.sort}
					>
						<option value=''>Sort</option>
						<option value='name asc'>Name A-Z</option>
						<option value='name desc'>Name Z-A</option>
						<option value='price asc'>Price (Low to High)</option>
						<option value='price desc'>Price (High to Low)</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default ShopHeader;
