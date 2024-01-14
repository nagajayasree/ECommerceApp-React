import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styles from './product-details.module.css';
import { CartContext } from '../context/cart';

function ProductDetails() {
  const [productDetails, setProductDetails] = useState([]);
  const { id } = useParams();
  const { onAddItem } = useContext(CartContext);

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
      <button onClick={() => onAddItem(productDetails)}>Add to cart</button>
    </div>
  );
}

export default ProductDetails;
