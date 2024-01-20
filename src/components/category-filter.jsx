import React from 'react';
import styles from './category-filter.module.css';

function CategoryFilter({ onCategoryChangeHandler }) {
  return (
    <div>
      <select
        name="category-list"
        id="category-list"
        onChange={onCategoryChangeHandler}
        className={styles.categoryDropdown}
      >
        <option value="">All</option>
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
