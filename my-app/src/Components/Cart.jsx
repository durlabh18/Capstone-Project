import React from 'react';
import './Cart.css';

function Cart({ cart, setCart }) {
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((total, item) => total + (item.productPrice * item.quantity), 0);

  return (
    <div className="cart">
      <h2>Cart Summary</h2>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <div className="product-info">
              <img src={item.imageUrl} alt={item.productName} className="product-image" />
              <div>
                <p>{item.productName} - Quantity: {item.quantity}</p>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;