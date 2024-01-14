import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import ProductsList from './components/products-list';
import ProductDetails from './components/product-details';
import NotFound from './components/not-found';
import CartItems from './components/cart-items';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<ProductsList />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="cart" element={<CartItems />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
