import React, { useContext } from 'react';
import { CartContext } from '../context/cart';
import Product from './product';

function CartItems() {
  const { cartItems, onAddItem, onDeleteItem, clearCart, getTotalCount } =
    useContext(CartContext);

  return (
    <div>
      <h3>Cart</h3>
      <div>
        {cartItems.map((p) => (
          <div key={p.id}>
            <Product
              id={p.id}
              img={p.thumbnail}
              title={p.title}
              desc={p.description}
              price={`$${p.price}`}
            />
            <button
              onClick={() => {
                onAddItem(p);
              }}
            >
              +
            </button>
            <p>{p.quantity}</p>
            <button
              onClick={() => {
                onDeleteItem(p);
              }}
            >
              -
            </button>
          </div>
        ))}
      </div>
      <div>
        {getTotalCount}
        {cartItems.length > 0 ? (
          <button
            onClick={() => {
              clearCart();
            }}
          >
            Clear Cart
          </button>
        ) : (
          'Your cart is Empty!'
        )}
      </div>
    </div>
  );
}

export default CartItems;
