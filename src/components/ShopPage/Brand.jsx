import React, { useEffect, useState } from 'react';

import classes from './ShopItem.module.scss';
import { IoIosArrowUp } from 'react-icons/io';

const Brand = ({ title, data }) => {
	const [isOpen, setIsOpen] = useState(false);

	const [isChecked, setIsChecked] = useState(
		new Array(data.length).fill(false)
	);

	const handleOnChange = (position) => {
		const updatedCheckedState = isChecked.map((item, index) =>
			index === position ? !item : item
		);

		setIsChecked(updatedCheckedState);
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
								checked={isChecked[i]}
								onChange={() => handleOnChange(i)}
							/>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Brand;
