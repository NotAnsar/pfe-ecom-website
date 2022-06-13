import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem, removeItem } from '../../store/cartSlice';
import classes from './ShoppingBasket.module.scss';

const Item = ({ id, image, name, price, qte, brand, categorie }) => {
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
					<p>
						{brand} / {categorie}
					</p>
					<div className={classes.qteContainer}>
						<div className={classes.quantity}>
							<span
								className={classes.span}
								onClick={() => {
									dispatch(removeItem({ id }));
								}}
							>
								-
							</span>
							<input min='1' onChange={() => ''} value={qte} type='tel' />
							<span
								className={classes.span}
								onClick={() => {
									dispatch(addItem({ id }));
								}}
							>
								+
							</span>
						</div>
						<h3>{`$${price.toFixed(2)}`}</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Item;
