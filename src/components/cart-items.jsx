import React, { useContext } from 'react';
import { CartContext } from '../context/cart';
import Product from './product';
import styles from './cart-items.module.css';

function CartItems() {
  const { cartItems, onAddItem, onDeleteItem, clearCart } =
    useContext(CartContext);

  return (
    <div>
      <div className={styles.cardsList}>
        {cartItems.map((p) => (
          <div key={p.id} className={styles.card}>
            <div className={styles.cardItems}>
              <Product
                id={p.id}
                img={p.thumbnail}
                title={p.title}
                desc={p.description}
                price={`$${p.price}`}
              />
              <div className={styles.buttons}>
                <button
                  onClick={() => {
                    onDeleteItem(p);
                  }}
                >
                  -
                </button>
                <p>{p.quantity}</p>
                <button
                  onClick={() => {
                    onAddItem(p);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {cartItems.length > 0 ? (
          <button
            onClick={() => {
              clearCart();
            }}
          >
            Clear Cart
          </button>
        ) : (
          <h4 className={styles.message}>Your cart is Empty!</h4>
        )}
      </div>
    </div>
  );
}

export default CartItems;
