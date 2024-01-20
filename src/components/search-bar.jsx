import React from 'react';
import styles from './search-bar.module.css';

function SearchBar({ searchInput, onChangeHandler, onClickHandler }) {
  return (
    <div className={styles.searchComp}>
      <input
        className={styles.search}
        value={searchInput}
        placeholder="Search for a product..."
        onChange={onChangeHandler}
      />
      <button onClick={onClickHandler}>Go</button>
    </div>
  );
}

export default SearchBar;
