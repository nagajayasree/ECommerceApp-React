import React, { useEffect, useState, useMemo, useContext } from 'react';
import Product from './product';
import styles from './products-list.module.css';
import { CartContext } from '../context/cart.jsx';
import SearchBar from './search-bar.jsx';
import CategoryFilter from './category-filter.jsx';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState();

  const { onAddItem } = useContext(CartContext);

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

  useEffect(() => {
    if (searchInput !== '') {
      setSelectedCategory('');
    }
  }, [searchInput]);

  function getFiltered() {
    if (selectedCategory === '') {
      if (searchInput === '') {
        return products;
      } else {
        return products.filter((product) => {
          const searchFields = product.title.toLowerCase();
          return searchFields.includes(searchInput.toLowerCase());
        });
      }
    }
    return products.filter((product) => {
      const productCategory = product.category;
      return productCategory.includes(selectedCategory);
    });
  }

  let filteredList = useMemo(getFiltered, [
    selectedCategory,
    searchInput,
    products,
  ]);

  function categoryChangeHandler(event) {
    setSelectedCategory(event.target.value);
  }

  console.log('products', products);
  console.log('filtered', filteredList);

  return (
    <div className={styles.bodyContainer}>
      <div className={styles.filters}>
        <SearchBar
          value={searchInput}
          onChangeHandler={(e) => setSearchInput(e.target.value)}
        />
        <CategoryFilter onCategoryChangeHandler={categoryChangeHandler} />
      </div>
      <div className={styles.cardsList}>
        {!searchInput && !selectedCategory
          ? filteredList.map((p) => (
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
            ))
          : ''}
      </div>
    </div>
  );
};

export default ProductsList;
