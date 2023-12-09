import { Link, Outlet } from 'react-router-dom';
import styles from './navbar.module.css';

function Navbar() {
  return (
    <div>
      <div className={styles.navbar}>
        <h2>eCommerceApp</h2>
        <Link to={'/'}>Products</Link>
        <Link to={'/cart'}>Cart</Link>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;
