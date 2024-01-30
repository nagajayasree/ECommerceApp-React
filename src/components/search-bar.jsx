import React from 'react';
import styles from './search-bar.module.css';

function SearchBar({ searchInput, onChangeHandler, onClickHandler }) {
  return (
    <div className={styles.searchComp}>
      <div className={styles.wrapper}>
        <input
          className={styles.search}
          value={searchInput}
          placeholder="Search for a product..."
          onChange={onChangeHandler}
        />
        <button onClick={onClickHandler}>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
