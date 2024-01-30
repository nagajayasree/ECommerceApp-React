import React, { useEffect, useState, useContext } from 'react';
import Product from './product';
import styles from './products-list.module.css';
import { CartContext } from '../context/cart.jsx';
import SearchBar from './search-bar.jsx';
import CategoryFilter from './category-filter.jsx';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState();

  const { onAddItem } = useContext(CartContext);

  useEffect(() => {
    const url = 'https://dummyjson.com/products';
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setProducts(result.products);
      setFilteredProducts(result.products);
      // setSelectedCategory(result.products);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.bodyContainer}>
      <div className={styles.filters}>
        <SearchBar
          value={searchInput}
          onChangeHandler={(e) => setSearchInput(e.target.value)}
          onClickHandler={() => {
            const filteredProducts = products.filter((res) =>
              res.title.toLowerCase().includes(searchInput.toLowerCase())
            );
            setFilteredProducts(filteredProducts);
          }}
        />
        <CategoryFilter
          onChangeHandler={(e) => {
            setSelectedCategory(e.target.value);
            const filteredProducts = products.filter((product) => {
              return product.category.includes(selectedCategory);
            });
            // console.log(filteredProducts);
            setFilteredProducts(filteredProducts);
          }}
        />
      </div>
      <div className={styles.cardsList}>
        {filteredProducts.map((p) => (
          <div key={p.id} className={styles.card}>
            <div className={styles.cardItems}>
              <Product
                id={p.id}
                img={p.thumbnail}
                title={p.title}
                desc={p.description}
                price={`$${p.price}`}
              />
              <button onClick={() => onAddItem(p)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
