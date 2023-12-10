import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import ProductsList from './components/products-list';
import Cart from './components/cart';
import ProductDetails from './components/product-details';
import NotFound from './components/not-found';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<ProductsList />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
