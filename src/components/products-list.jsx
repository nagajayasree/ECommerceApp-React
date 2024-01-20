import React, { useEffect, useState, useMemo, useContext } from 'react';
import Product from './product';
import styles from './products-list.module.css';
import { CartContext } from '../context/cart.jsx';
import SearchBar from './search-bar.jsx';
import CategoryFilter from './category-filter.jsx';

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [searchInput, setSearchInput] = useState('');
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

  function getFilteredList() {
    if (!selectedCategory) {
      return products;
    }
    return products.filter((item) => item.category === selectedCategory);
  }

  let filteredList = useMemo(getFilteredList, [selectedCategory, products]);

  function categoryChangeHandler(event) {
    setSelectedCategory(event.target.value);
  }

  function onClickHandler() {
    if (!searchInput) {
      setProducts(filteredList);
    } else {
      const filterBySearch = filteredList.filter((item) => {
        if (item.title.toLowerCase().includes(searchInput.toLowerCase())) {
          return item;
        }
        return false;
      });
      setProducts(filterBySearch);
    }
  }

  return (
    <div className={styles.bodyContainer}>
      <div className={styles.filters}>
        <SearchBar
          value={searchInput}
          onChangeHandler={(e) => setSearchInput(e.target.value)}
          onClickHandler={onClickHandler}
        />
        <CategoryFilter onCategoryChangeHandler={categoryChangeHandler} />
      </div>
      <div className={styles.cardsList}>
        {filteredList.map((p) => (
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
}

export default ProductsList;
