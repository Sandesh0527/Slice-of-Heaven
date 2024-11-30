import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import PaymentGateway from './pages/PaymentGateway';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar stays outside of Routes */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="logo">Slice of Heaven</a>
          <ul className="nav-links">
            <li><a href="/menu">Menu</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
      </nav>

      {/* Routes for pages */}
      <Routes>
        <Route path="/" element={<CartPage />} />
        <Route path="/payment" element={<PaymentGateway />} />
      </Routes>
    </div>
  );
}

export default App;
