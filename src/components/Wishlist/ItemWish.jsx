import React from 'react';
import classes from './WishList.module.scss';

import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { removeWish } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';

const Item = ({ id, image, name, price }) => {
	const dispatch = useDispatch();

	return (
		<div className={classes.itemContainer}>
			<div className={classes.item}>
				<Link to={`product/${id}`}>
					<img src={`http://localhost:3000/images/${image}`} alt={name} />
				</Link>

				<div>
					<Link to={`product/${id}`}>
						<h2>{name}</h2>
					</Link>
					<span className={classes.flex}>
						{/* <p>{details}</p> */}
						<p>{`$${price.toFixed(2)}`}</p>
					</span>
				</div>
				<div
					className={classes.centersvg}
					onClick={() => dispatch(removeWish({ product_id: id }))}
				>
					<FiX />
				</div>
			</div>
		</div>
	);
};

export default Item;
