import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './product-details.module.css';

function ProductDetails() {
  const [productDetails, setProductDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `https://dummyjson.com/products/${id}`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setProductDetails(result);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className={styles.details}>
      <img src={productDetails.thumbnail} alt="" width="60%" height={500} />
      <h1>{productDetails.title}</h1>
      <p>{productDetails.description}</p>
      <h1>{`$${productDetails.price}`}</h1>
      <h4>Discount :{`$${productDetails.discountPercentage}`}</h4>
      <button>Add to cart</button>
    </div>
  );
}

export default ProductDetails;
