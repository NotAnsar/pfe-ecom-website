import React, { useEffect, useState } from 'react';
import Brand from './Brand';
import classes from './ShopItem.module.scss';

const Filter = ({ brands, categories, getFilter }) => {
	const [brandSelected, setBrandSelected] = useState(0);
	const [categorieSelected, setCategorieSelected] = useState(0);

	useEffect(() => {
		getFilter(brandSelected, categorieSelected);
	}, [brandSelected, categorieSelected]);

	const getSelected = () => {};
	return (
		<div className={classes.filter}>
			<h2>Filter Products</h2>
			<Brand selected={setBrandSelected} title='Brand' data={brands} />
			<Brand
				selected={setCategorieSelected}
				title='Categorie'
				data={categories}
			/>
		</div>
	);
};

export default Filter;
