import React from 'react';
import { Link } from 'react-router-dom';
import styles from './product.module.css';

function Product({ id, img, title, desc, price }) {
  return (
    <div>
      <Link to={`/products/${id}`} className={styles.link}>
        <img src={img} alt={title} width={150} height={150} />
        <h3>{title}</h3>
        <p className={styles.desc}>{desc}</p>
        <p>{price}</p>
      </Link>
    </div>
  );
}

export default Product;
