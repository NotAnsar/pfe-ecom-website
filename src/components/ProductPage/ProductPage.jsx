import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import classes from './ProductPage.module.scss';

const ProductPage = ({ data }) => {
  const [quantity, setQte] = useState(1);
  const { error, brands, categories } = useSelector((state) => state.products);

  let brand, categorie;

  if (error) return <div>Something wrong happend</div>;
  if (!data || brands.length === 0 || categories.length === 0)
    return <div>loading </div>;

  brand = brands?.find((brand) => brand.brand_id === data.brand_id)?.brand;
  categorie = categories?.find(
    (c) => c.categorie_id === data.categorie_id
  )?.categorie;

  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        <div className={classes.img}>
          <img src={`../../../images/${data.image}`} alt={data.name} />
        </div>
        <div className={classes.details}>
          <div className={classes.titleContainer}>
            <h1>{data.name}</h1>
            <p>{data.price}$</p>
          </div>
          <div className={classes.BrandContainer}>
            <div className={classes.Brand}>
              <h4>Brand</h4>
              <h5>
                {brand &&
                  brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase()}
              </h5>
            </div>
            <div className={classes.Categorie}>
              <h4>Categorie</h4>
              <h5>
                {categorie &&
                  categorie.charAt(0).toUpperCase() +
                    categorie.slice(1).toLowerCase()}
              </h5>
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
                  max='5'
                  onChange={() => console.log('a')}
                  value={quantity}
                  type='tel'
                />
                <span
                  className={classes.span}
                  onClick={() => {
                    if (quantity < 5) {
                      setQte((p) => p + 1);
                    }
                  }}
                >
                  +
                </span>
              </div>
            </div>
            <div>
              <button className={classes.button}>Add to cart</button>
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
