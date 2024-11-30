import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './CartPage.css';

const CartPage = () => {
  // Sample Cart Data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Margherita',
      imageUrl: '/images/margherita.jpg',
      price: 5.99,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Pepperoni',
      imageUrl: '/images/pepperoni.jpg',
      price: 7.99,
      quantity: 2,
    },
  ]);

  const navigate = useNavigate(); // Hook for navigation

  // Update quantity of a cart item
  const updateQuantity = (id, type) => {
    setCartItems(prevState =>
      prevState.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: type === 'increment' ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  // Calculate total cost
  const getTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Navigate to the Payment Gateway page
  const handleProceedToPay = () => {
    navigate('/payment'); // Redirect to the PaymentGateway route
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, 'decrement')}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 'increment')}>+</button>
              </div>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ${getTotal()}</h3>
        <button className="checkout-btn" onClick={handleProceedToPay}>
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default CartPage;
