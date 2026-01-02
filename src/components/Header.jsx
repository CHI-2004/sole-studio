import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import the hook
import '../styles/Header.css';

const Header = () => {
  // Grab the cart array and the isBumped animation state from Context
  const { cart, isBumped } = useCart();

  // Calculate the total number of items in the cart
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="logo">SOLE<span>STYLE</span></Link>
        <div className="nav-actions">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          {/* Modernized Shop Button */}
  <Link to="/shop" className="shop-btn-modern">
    Shop
  </Link>
          <Link to="/login" className="nav-icon">Login</Link>
          
          {/* Apply the 'bump' class when an item is added, and only show badge if count > 0 */}
          <Link to="/cart" className={`nav-icon cart-icon ${isBumped ? 'bump' : ''}`}>
            🛒 {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;