import React from 'react';
import classes from './Summary.module.scss';

const Itm = ({ id, image, name, price, qte, brand, categorie }) => {
	return (
		<div className={classes.itemContainer}>
			<div className={classes.item}>
				<img src={`http://localhost:3000/images/${image}`} alt={name} />
				<div>
					<h2>{name}</h2>
					<p>
						{brand} / {categorie}
					</p>
					<div className={classes.qteContainer}>
						<div className={classes.quantity}>x{qte}</div>
						<div className={classes.price}>
							<h3>{`$${(price * qte).toFixed(2)}`}</h3>
							<p>{`$${price.toFixed(2)} each`}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Itm;
