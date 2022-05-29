import React from 'react';
import { useSelector } from 'react-redux';
import ShoppingItem from './ShoppingItem';

import classes from './TrendingItems.module.scss';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const TrendingItems = () => {
	const trendingItems = useSelector((state) => state.products.trendingItems);

	return (
		<div className={classes.trendingSection}>
			<div className={classes.container}>
				<div className={classes.shopAll}>
					<h1>Trending Items</h1>
				</div>
				{trendingItems.length === 0 && (
					<div style={{ height: '400px' }}>
						<div className='load'>
							{/* <FiLoader /> */}
							<AiOutlineLoading3Quarters />
						</div>
					</div>
				)}
				{trendingItems && (
					<div className={classes.itemContainer}>
						{trendingItems.map((p) => (
							<ShoppingItem
								key={p.product_id}
								id={p.product_id}
								image={p.image}
								name={p.name}
								price={p.price}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default TrendingItems;
