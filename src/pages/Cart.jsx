import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Use the hook!
import '../styles/Cart.css';

const Cart = () => {
  // Grab everything from Context, not props!
  const { cart, removeFromCart, addToCart, cartTotal } = useCart();
  
  const shipping = cartTotal > 150 ? 0 : 15;

  const updateQty = (product, size, delta) => {
    // Logic to handle quantity via Context
    if (delta > 0) {
      addToCart(product, size, product.colors[0]);
    } else {
      // Logic for minus would go here or in Context
    }
  };

  return (
    <div className="cart-page container">
      <h1>Your Bag</h1>
      <div className="cart-layout">
        <div className="cart-items">
          {cart.length === 0 && (
            <div className="empty-cart">
               <p>Your cart is empty.</p>
               <Link to="/shop" className="btn-primary">Shop now</Link>
            </div>
          )}
          {cart.map(item => (
            <div key={`${item.id}-${item.size}`} className="cart-item">
              {/* FIXED IMAGE SOURCE */}
              <img src={item.images ? item.images[0] : ''} alt={item.name} /> 
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>Size: {item.size}</p>
                <div className="qty-controls">
                  <span>Qty: {item.quantity}</span>
                </div>
              </div>
              <p className="item-price">${item.price * item.quantity}</p>
              <button 
                className="remove-btn" 
                onClick={() => removeFromCart(item.id, item.size)}
              >✕</button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Summary</h3>
          <div className="summary-row"><span>Subtotal</span> <span>${cartTotal}</span></div>
          <div className="summary-row"><span>Estimated Shipping</span> <span>${shipping}</span></div>
          <hr />
          <div className="summary-row total"><span>Total</span> <span>${cartTotal + shipping}</span></div>
          <Link to="/checkout" className="btn-primary checkout-btn">Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;