import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css'; 

// --- Component: Receipt View ---
const Receipt = ({ orderDetails }) => {
  const navigate = useNavigate();

  return (
    <div className="receipt-container card-shadow">
      <div className="receipt-header">
        <span className="success-icon">✅</span>
        <h2>Order Confirmed!</h2>
        <p>Order ID: {orderDetails.orderId}</p>
      </div>
      
      <div className="receipt-section">
        <h4>Customer Details</h4>
        <p><strong>Name:</strong> {orderDetails.firstName} {orderDetails.lastName}</p>
        <p><strong>Email:</strong> {orderDetails.email}</p>
        <p><strong>Delivery to:</strong> {orderDetails.address}</p>
      </div>

      <div className="receipt-section">
        <h4>Order Summary</h4>
        {orderDetails.items.map(item => (
          <div key={`${item.id}-${item.size}`} className="receipt-item">
            <span>{item.name} (x{item.quantity})</span>
            <span>${item.price * item.quantity}</span>
          </div>
        ))}
        <hr />
        <div className="receipt-row total"><span>Total Paid:</span> <span>${orderDetails.total}</span></div>
      </div>

      <div className="delivery-info-box">
        <h4>📦 Delivery Information</h4>
        <p><strong>Estimated Arrival:</strong> {orderDetails.estDate}</p>
        <p><strong>Duration:</strong> 3–5 business days</p>
        <p className="note"><em>"You will be called when your goods arrive for collection."</em></p>
      </div>

      <div className="receipt-actions">
        <button className="btn-primary" onClick={() => navigate('/')}>Back Home</button>
      </div>
    </div>
  );
};

const Checkout = () => {
  const { cart } = useCart(); 
  
  // --- State Management ---
  const [step, setStep] = useState(1); 
  const [isLoading, setIsLoading] = useState(false); // New Loading State
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', street: '', city: '', zip: ''
  });

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const total = subtotal + (subtotal > 150 ? 0 : 15);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start Spinner

    // Simulate Payment Processing for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
      setStep(2); // Move to Receipt
      console.log(`Automatic receipt generated and sent to ${formData.email}`);
    }, 2000);
  };

  const orderDetails = {
    orderId: 'ST-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    ...formData,
    address: `${formData.street}, ${formData.city}`,
    items: cart,
    total,
    estDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toDateString()
  };

  // --- Loading UI ---
  if (isLoading) {
    return (
      <div className="loading-overlay">
        <div className="spinner"></div>
        <p>Processing Payment...</p>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="checkout-page container">
        <div className="confirmation-msg">
          <h1>Thank you for doing business with us.</h1>
        </div>
        <Receipt orderDetails={orderDetails} />
      </div>
    );
  }

  return (
    <div className="checkout-page container">
      <div className="checkout-grid card-shadow">
        <div className="checkout-form">
          <h2>Shipping Details</h2>
          <form onSubmit={handlePlaceOrder}>
            <div className="form-row">
              <input type="text" name="firstName" placeholder="First Name" required value={formData.firstName} onChange={handleInputChange} />
              <input type="text" name="lastName" placeholder="Last Name" required value={formData.lastName} onChange={handleInputChange} />
            </div>
            <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleInputChange} />
            <input type="text" name="street" placeholder="Street Address" required value={formData.street} onChange={handleInputChange} />
            <div className="form-row">
              <input type="text" name="city" placeholder="City" required value={formData.city} onChange={handleInputChange} />
              <input type="text" name="zip" placeholder="ZIP Code" required value={formData.zip} onChange={handleInputChange} />
            </div>
            
            <h2 style={{ marginTop: '2rem' }}>Payment</h2>
            <div className="payment-icons">
              <span>💳 Visa</span> <span>💳 Mastercard</span> <span>🅿️ PayPal</span>
            </div>
            <input type="text" placeholder="Card Number" required />
            <div className="form-row">
              <input type="text" placeholder="MM/YY" required />
              <input type="text" placeholder="CVV" required />
            </div>
            <button type="submit" className="btn-primary checkout-submit">Place Order</button>
          </form>
        </div>

        <div className="order-summary-box">
          <h3>Order Summary</h3>
          {cart.map(item => (
            <div key={`${item.id}-${item.size}`} className="summary-item">
              <span>{item.name} (x{item.quantity})</span>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}
          <hr />
          <div className="summary-total">
            <span>Total to Pay</span>
            <span>${total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;