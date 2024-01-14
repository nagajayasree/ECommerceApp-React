import React from 'react';
import { Link } from 'react-router-dom';
import styles from './products.module.css';

function Product({ id, img, title, desc, price }) {
  return (
    <div className={styles.card}>
      <Link to={`/products/${id}`} className={styles.link}>
        <img src={img} alt={title} width={200} height={200} />
        <h3>{title}</h3>
        <p>{desc}</p>
        <p>{price}</p>
      </Link>
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
