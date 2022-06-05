import React, { useEffect, useState } from 'react';

import classes from './ShopItem.module.scss';
import { IoIosArrowUp } from 'react-icons/io';

const Brand = ({ title, data, selected }) => {
	const [isOpen, setIsOpen] = useState(false);

	const [isChecked, setIsChecked] = useState(0);

	const handleOnChange = (id) => {
		selected(id);
		setIsChecked(id);
	};

	return (
		<div className={classes.brand}>
			<div className={classes.brandTitle}>
				<h4>{title}</h4>
				<div
					className={`${classes.arrow} ${
						isOpen ? classes.arrowOpen : classes.arrowClose
					} `}
					onClick={() => {
						setIsOpen((p) => !p);
					}}
				>
					<IoIosArrowUp />
				</div>
			</div>
			{isOpen && (
				<ul>
					{data.map((d, i) => (
						<li key={i} className={classes.brandItem}>
							<p>{title === 'Brand' ? d.brand : d.categorie}</p>
							<input
								type='radio'
								name={title}
								value={title === 'Brand' ? d.brand_id : d.categorie_id}
								onChange={() =>
									handleOnChange(
										title === 'Brand' ? d.brand_id : d.categorie_id
									)
								}
							/>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Brand;
