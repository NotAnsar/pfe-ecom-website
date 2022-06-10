import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ShoppingBasket.module.scss';

const Bottom = ({ total }) => {
	return (
		<div className={classes.bottom}>
			<div>
				<h3>Total</h3>
				<h3 className={classes.total}>${total.toFixed(2)}</h3>
			</div>
			<Link to='/checkout' className='button'>
				Check out
			</Link>
		</div>
	);
};

export default Bottom;
