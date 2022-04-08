import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './ProductPage.module.scss';
import { FiHeart } from 'react-icons/fi';
import ProductNotFound from './ProductNotFound/ProductNotFound';
import { addCart, addWish } from '../../store/cartSlice';
import { showCart, showWish } from '../../store/wishListSlice';

const ProductPage = ({ data }) => {
  const [quantity, setQte] = useState(1);
  const { error, brands, categories } = useSelector((state) => state.products);
  let brand, categorie;

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  if (data === undefined) {
    return <ProductNotFound />;
  }
  if (error) return <div>Something wrong happend</div>;

  if (data === null || brands.length === 0 || categories.length === 0)
    return (
      <div className='loading'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif' />
      </div>
    );

  brand = brands?.find((brand) => brand.brand_id === data.brand_id)?.brand;
  brand = brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase();
  categorie = categories?.find(
    (c) => c.categorie_id === data.categorie_id
  )?.categorie;
  categorie =
    categorie.charAt(0).toUpperCase() + categorie.slice(1).toLowerCase();

  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        <div className={classes.img}>
          <img src={`../../../images/${data.image}`} alt={data.name} />
        </div>
        <div className={classes.details}>
          <div className={classes.titleContainer}>
            <h1>{data.name}</h1>
            <p>{data.price.toFixed(2)}$</p>
          </div>
          <div className={classes.BrandContainer}>
            <div className={classes.Brand}>
              <h4>Brand</h4>
              <h5>{brand}</h5>
            </div>
            <div className={classes.Categorie}>
              <h4>Categorie</h4>
              <h5>{categorie}</h5>
            </div>
            <div className={classes.quantityContainer}>
              <h4>Quantity</h4>
              <div className={classes.quantity}>
                <span
                  className={classes.span}
                  onClick={() => {
                    if (quantity > 1) {
                      setQte((p) => p - 1);
                    }
                  }}
                >
                  -
                </span>
                <input
                  min='1'
                  onChange={() => console.log('a')}
                  value={quantity}
                  type='tel'
                />
                <span
                  className={classes.span}
                  onClick={() => {
                    setQte((p) => p + 1);
                  }}
                >
                  +
                </span>
              </div>
            </div>
            <div className={classes.btnContainer}>
              <button
                className={classes.button}
                onClick={() => {
                  dispatch(showCart());
                  dispatch(
                    addCart({
                      image: data.image,
                      name: data.name,
                      price: data.price,
                      product_id: data.product_id,
                      qte: +quantity,
                      brand,
                      categorie,
                    })
                  );
                }}
              >
                Add to cart
              </button>
              <button
                className={`${classes.button} ${classes.heart}`}
                onClick={() => {
                  dispatch(showWish());
                  dispatch(
                    addWish({
                      image: data.image,
                      name: data.name,
                      price: data.price,
                      product_id: data.product_id,
                    })
                  );
                }}
              >
                <FiHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.Description}>
        <h4>Description</h4>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default ProductPage;
