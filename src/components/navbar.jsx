import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './navbar.module.css';

function Navbar() {
  return (
    <div>
      <div className={styles.navbar}>
        <Link to={'/'} className={styles.link}>
          <h2>eCommerceApp</h2>
        </Link>
        <div className={styles.navItems}>
          <Link to={'/'} className={styles.link}>
            Products
          </Link>
          <Link to={'/cart'} className={styles.link}>
            Cart
          </Link>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;
