import React, { useEffect, useState } from 'react';
import Product from './product';
import styles from './products-list.module.css';

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = 'https://dummyjson.com/products';
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setProducts(result.products);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.cardsList}>
      {products.map((p) => (
        <Product
          img={p.thumbnail}
          title={p.title}
          desc={p.description}
          price={`$${p.price}`}
        />
      ))}
    </div>
  );
}

export default ProductsList;
