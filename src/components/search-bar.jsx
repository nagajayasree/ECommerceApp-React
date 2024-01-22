import React from 'react';
import styles from './search-bar.module.css';

function SearchBar({ searchInput, onChangeHandler }) {
  return (
    <div className={styles.searchComp}>
      <div className={styles.wrapper}>
        <input
          className={styles.search}
          value={searchInput}
          placeholder="Search for a product..."
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
}

export default SearchBar;
