import React, { useEffect, useState } from 'react';

import ShopItem from '../TrendingItems/ShoppingItem';

import classes from './ShopItem.module.scss';
import { useSelector } from 'react-redux';
import ShopHeader from './ShopHeader';
import Filter from './Filter';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ShopAll = () => {
	const { brands, categories } = useSelector((state) => state.products);

	const [products, setProducts] = useState(null);
	const [type, setType] = useState('filter');
	const [pageNum, setPageNum] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [brandid, setBrandid] = useState(0);
	const [categorieid, setCategorieid] = useState(0);
	const [orderBy, setOrderBy] = useState('');
	const [sortBy, setSortBy] = useState('');

	const getFilter = (brandid, categorieid) => {
		if (brandid !== 0 || categorieid !== 0) {
			setPageNum(0);
			setCurrentPage(1);
			setBrandid(brandid);
			setCategorieid(categorieid);
			setOrderBy('');
			setSortBy('');
			setType('filter');
		}
	};
	const getSort = (sort) => {
		if (sort.length === 2) {
			const [sortBy, sortorder] = sort;
			setPageNum(0);
			setCurrentPage(1);
			setOrderBy(sortBy);
			setSortBy(sortorder);
			setBrandid(0);
			setCategorieid(0);
			setType('sort');
		} else {
			setPageNum(0);
			setCurrentPage(1);
			setOrderBy('');
			setSortBy('');
			setBrandid(0);
			setCategorieid(0);
			setType('filter');
		}
	};
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		async function getProducts(
			type = 'filter',
			page = 1,
			categorie_id = 0,
			brand_id = 0
		) {
			try {
				let url = 'http://127.0.0.1:8000/api/';
				if (type == 'sort') {
					url += `productsSort?page=${page}`;
					if (categorie_id !== '') url += `&sortBy=${categorie_id}`;
					if (brand_id !== '') url += `&sortorder=${brand_id}`;
				} else {
					url += `productsFilter?page=${page}`;
					if (categorie_id > 0) url += `&categorie_id=${categorie_id}`;
					if (brand_id > 0) url += `&brand_id=${brand_id}`;
				}

				const res = await fetch(url);

				const prd = await res.json();
				console.log(prd);
				setPageNum(prd.last_page);
				setProducts(prd.data);
			} catch (error) {
				console.log(url);
			}
		}
		if (type === 'sort') {
			getProducts(type, currentPage, orderBy, sortBy);
		} else {
			getProducts(type, currentPage, categorieid, brandid);
		}
	}, [currentPage, categorieid, brandid, orderBy, sortBy, type]);

	return (
		<div className={classes.trendingSection}>
			<div className={classes.container}>
				<ShopHeader getSort={getSort} />
				<div className={classes.shopContainer}>
					<Filter
						getFilter={getFilter}
						brands={brands}
						categories={categories}
					/>
					{(!products || brands.length === 0 || categories.length === 0) && (
						<div style={{ height: '600px' }}>
							<div className='load'>
								{/* <FiLoader /> */}
								<AiOutlineLoading3Quarters />
							</div>
						</div>
					)}
					{products && products.length === 0 && <h1>Product Not found</h1>}

					{products && products.length > 0 && (
						<div>
							<div className={classes.itemContainer}>
								{products &&
									products?.map((p) => (
										<ShopItem
											key={p.product_id}
											id={p.product_id}
											image={p.image}
											name={p.name}
											price={p.price}
										/>
									))}
							</div>
							<div className={classes.pagination}>
								{products && pageNum > 0 && (
									<span className={classes.page}>
										<FiChevronLeft
											onClick={() => {
												if (currentPage !== 1)
													return setCurrentPage(currentPage - 1);
											}}
										/>
										<p
											className={classes.pagenum}
										>{`${currentPage}/${pageNum}`}</p>
										<FiChevronRight
											onClick={() => {
												if (currentPage < pageNum)
													return setCurrentPage(currentPage + 1);
											}}
										/>
									</span>
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ShopAll;
