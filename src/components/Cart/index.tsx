'use client'

import React from 'react';
import styles from './Cart.module.css';

interface CartProps {
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
  return (
    <div className={styles.cartOverlay}>
      <div className={styles.cartContent}>
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Cart;