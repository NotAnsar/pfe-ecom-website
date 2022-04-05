import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductPage from '../components/ProductPage/ProductPage';

const Product = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);
  const data = products.find((d) => d.product_id === +id);

  return <ProductPage data={data} />;
};

export default Product;
