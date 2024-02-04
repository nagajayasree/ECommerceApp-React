import React from 'react';
import styles from './category-filter.module.css';

function CategoryFilter({ selectedCategory, onChangeHandler }) {
  return (
    <div>
      <select
        name="category-list"
        id="category-list"
        onChange={onChangeHandler}
        value={selectedCategory}
        className={styles.categoryDropdown}
      >
        <option value="all">All</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="fragrances">Fragrances</option>
        <option value="skincare">Skincare</option>
        <option value="groceries">Groceries</option>
        <option value="home-decoration">Home-decoration</option>
      </select>
    </div>
  );
}

export default CategoryFilter;
