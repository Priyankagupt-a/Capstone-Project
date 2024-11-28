// pages/Cart.tsx
import React from 'react';
import { useCart } from '../component/context/CartContext';

const Cart: React.FC = () => {
  const { cart } = useCart();

  const handleRemoveFromCart = (productId: string) => {
    // Implement your remove from cart functionality here
  };

  const handleIncreaseQty = (productId: string) => {
    // Implement functionality to increase quantity here
  };

  const handleDecreaseQty = (productId: string) => {
    // Implement functionality to decrease quantity here
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>Price: ${item.discountedPrice}</p>
                <p>Quantity: {item.qty}</p>
                <button onClick={() => handleIncreaseQty(item.id)}>Increase</button>
                <button onClick={() => handleDecreaseQty(item.id)}>Decrease</button>
                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;