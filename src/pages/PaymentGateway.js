import React, { useState } from 'react';
import './PaymentGateway.css';

const PaymentGateway = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');

  // Handle Payment Submission
  const handlePayment = (e) => {
    e.preventDefault();
    alert(`Payment Successful via ${paymentMethod.toUpperCase()}`);
  };

  return (
    <div className="payment-container">
      <h2 className="payment-title">Complete Your Payment</h2>
      <div className="payment-options">
        <h3>Choose Payment Method</h3>
        <div className="payment-methods">
          <button
            className={`payment-method ${paymentMethod === 'card' ? 'active' : ''}`}
            onClick={() => setPaymentMethod('card')}
          >
            Credit/Debit Card
          </button>
          <button
            className={`payment-method ${paymentMethod === 'upi' ? 'active' : ''}`}
            onClick={() => setPaymentMethod('upi')}
          >
            UPI
          </button>
          <button
            className={`payment-method ${paymentMethod === 'netbanking' ? 'active' : ''}`}
            onClick={() => setPaymentMethod('netbanking')}
          >
            Net Banking
          </button>
        </div>
      </div>

      <form className="payment-form" onSubmit={handlePayment}>
        {paymentMethod === 'card' && (
          <div className="payment-card">
            <h3>Card Details</h3>
            <div className="form-group">
              <label>Card Number</label>
              <input type="text" placeholder="1234 5678 9012 3456" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Expiry Date</label>
                <input type="text" placeholder="MM/YY" required />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input type="password" placeholder="123" required />
              </div>
            </div>
            <div className="form-group">
              <label>Name on Card</label>
              <input type="text" placeholder="John Doe" required />
            </div>
          </div>
        )}

        {paymentMethod === 'upi' && (
          <div className="payment-upi">
            <h3>UPI Payment</h3>
            <div className="form-group">
              <label>UPI ID</label>
              <input type="text" placeholder="example@upi" required />
            </div>
          </div>
        )}

        {paymentMethod === 'netbanking' && (
          <div className="payment-netbanking">
            <h3>Net Banking</h3>
            <div className="form-group">
              <label>Select Bank</label>
              <select required>
                <option value="">Choose your bank</option>
                <option value="hdfc">HDFC Bank</option>
                <option value="icici">ICICI Bank</option>
                <option value="sbi">State Bank of India</option>
                <option value="axis">Axis Bank</option>
              </select>
            </div>
          </div>
        )}

        <button type="submit" className="pay-now-btn">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentGateway;
