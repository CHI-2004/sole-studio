import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import HeroSlider from '../components/HeroSlider';
import '../styles/Home.css';
import sneaker from '../assets/sneaker.jpg';
import off2 from '../assets/off2.jpg';
import kid from '../assets/kid.jpg';
import current from '../assets/current.png';
import double from '../assets/double.png';
import h1 from '../assets/h1.jpg';
import menshoes from '../assets/menshoes.png';
import office1 from '../assets/office1.jpg';
import nike9 from '../assets/Nike9.jpg';
import shoe1 from '../assets/shoe1.jpg';
import off1 from '../assets/off1.jpg';
import jordan1 from '../assets/Jordan1.jpg';
import jordan2 from '../assets/Jordan 2.jpg';
import jordan3 from '../assets/Jordan3.jpg';
import jordan4 from '../assets/Jordan4.jpg';
import jordan5 from '../assets/Jordan5.jpg';
import jordan6 from '../assets/Jordan6.jpg';

// --- Sub-component: Countdown Timer ---
const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = Object.entries(timeLeft).map(([unit, value]) => (
    <div key={unit} className="timer-block">
      <span className="timer-value">{value.toString().padStart(2, '0')}</span>
      <span className="timer-unit">{unit}</span>
    </div>
  ));

  return (
    <div className="countdown-container">
      {timerComponents.length ? (
        <div className="timer-grid">{timerComponents}</div>
      ) : (
        <span className="timer-expired">OFFER EXPIRED</span>
      )}
    </div>
  );
};

// --- Main Home Component ---
const Home = () => {
  const { addToCart } = useCart();
  const [copyStatus, setCopyStatus] = useState('SOLE30');

// 1. Existing slice for featured products
  const featured = products.slice(0, 15);

  // 2. ADD YOUR NEW FILTER LOGIC HERE:
  // This filters the main products list to find only Jordan brand items
  const jordanProducts = products.filter(p => p.brand.toLowerCase() === 'jordan').slice(0, 8);
  
  // This prepares the list for your future Reebok section
  const reebokProducts = products.filter(p => p.brand.toLowerCase() === 'reebok').slice(0, 8);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('SOLE30');
    setCopyStatus('COPIED!');
    setTimeout(() => setCopyStatus('SOLE30'), 2000);
  };

  return (
    <div className="home">
      <HeroSlider addToCart={addToCart} />

      <section className="brands container">
        <div className="brand-logos">
          <span>NIKE</span>
          <span>ADIDAS</span>
          <span>PUMA</span>
          <span>REEBOK</span>
          <span>JORDAN</span>
        </div>
      </section>

      <section className="featured container">
        <div className="section-header">
          <h2>New Arrivals</h2>
          <Link to="/shop" className="view-all-link">View All Products →</Link>
        </div>

        {/* UPDATED: Added scroll wrapper for horizontal navigation */}
        <div className="horizontal-scroll-wrapper">
          <div className="marketplace-grid horizontal">
            {featured.map(product => (
              <div key={product.id} className="product-card jumia-style">
                <div className="img-wrapper">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.images[0]} alt={product.name} loading="lazy" />
                  </Link>
                  {/* UNIQUE BADGE: Now pulls the discount directly from your data */}
                    <span className="discount-badge">-{product.discount || 0}%</span>
                  
                  <button
                    className="add-to-cart-mini"
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product, product.sizes?.[0], product.colors?.[0]);
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                  </button>
                </div>

                <div className="product-details">
                  <p className="brand-name">{product.brand}</p>
                  <h3 className="product-title">{product.name}</h3>

                  <div className="price-section">
                    <span className="current-price">₦{product.price.toLocaleString()}</span>
                    <span className="old-price">₦{(product.price * 1.2).toFixed(0).toLocaleString()}</span>
                  </div>

                  {/* STOCK PROGRESS BAR */}
          <div className="flash-sale-stock">
            <p className="items-left-text">{product.itemsLeft || "Limited"} items left</p>
            <div className="progress-bar-bg">
              <div className="progress-fill" style={{ width: `${product.stockPercentage || 50}%` }}></div>
            </div>
          </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* --- PROMO TILES (After New Arrivals) --- */}
<section className="promo-tiles container">
  <div className="promo-grid">
    <div className="promo-card blue">
      <div className="promo-text">
        <h3>New Release<br/>Air Jordan Retro</h3>
        <p>₦185,000.00</p>
        <Link to="/shop" className="promo-link">SHOP NOW</Link>
      </div>
      {/* Use the imported variable name directly */}
      <img src={double} alt="Jordan 9" className="promo-image" />
    </div>

    <div className="promo-card orange">
      <div className="promo-text">
        <h3>Biggest Deals<br/>On Sportswear</h3>
        <p>Up to 40% Off</p>
        <Link to="/shop" className="promo-link">SHOP NOW</Link>
      </div>
      <img src={current} alt="Jordan 7" className="promo-image" />
    </div>

    <div className="promo-card green">
      <div className="promo-text">
        <h3>Premium Quality<br/>Leather Loafers</h3>
        <p>₦45,000.00</p>
        <Link to="/shop" className="promo-link">SHOP NOW</Link>
      </div>
      <img src={menshoes} alt="Jordan 6" className="promo-image" />
    </div>
  </div>
</section>

{/* Now follow with your Trending Now section... */}

      {/* --- SECTION 2: TRENDING NOW --- */}
<section className="featured container" style={{ marginTop: '2rem' }}>
  <div className="section-header">
    <h2>Trending Now</h2>
    <Link to="/shop" className="view-all-link">Explore More →</Link>
  </div>
  <div className="horizontal-scroll-wrapper">
    <div className="marketplace-grid horizontal">
      {/* Slice different products (e.g., from index 4 to 10) to vary the row */}
      {products.slice(4, 12).map(product => (
        <div key={product.id} className="product-card jumia-style">
          <div className="img-wrapper">
            <Link to={`/product/${product.id}`}>
              <img src={product.images[0]} alt={product.name} loading="lazy" />
            </Link>
            <span className="discount-badge">-{product.discount || 0}%</span>
            <button className="add-to-cart-mini" onClick={() => addToCart(product)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </button>
          </div>
          <div className="product-details">
            <p className="brand-name">{product.brand}</p>
            <h3 className="product-title">{product.name}</h3>
            <div className="price-section">
              <span className="current-price">₦{product.price.toLocaleString()}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* SECTION 3: JORDAN COLLECTION (Replaces Top Rated) */}
{/* --- SECTION 3: JORDAN COLLECTION --- */}
<section className="featured container" style={{ marginTop: '2rem' }}>
  <div className="section-header">
    <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      Jordan Collection <span style={{ fontSize: '0.8rem', background: '#000', color: '#fff', padding: '2px 8px', borderRadius: '4px' }}>OFFICIAL</span>
    </h2>
    {/* Change the Link in your Home.jsx Jordan Section */}
{/* In Home.jsx */}
<Link to="/shop?brand=Jordan" className="view-all-link">View All Jordans →</Link>
  </div>
  <div className="horizontal-scroll-wrapper">
    <div className="marketplace-grid horizontal">
      {jordanProducts.map((product, index) => {
        // Create an array of your local imports to map them to the filtered products
        const localJordans = [jordan1, jordan2, jordan3, jordan4, jordan5, jordan6];
        
        return (
          <div key={product.id} className="product-card jumia-style">
            <div className="img-wrapper">
              <Link to={`/product/${product.id}`}>
                {/* This line now uses your local assets instead of the data file images */}
                <img src={localJordans[index] || product.images[0]} alt={product.name} loading="lazy" />
              </Link>
              <span className="discount-badge">-{product.discount || 0}%</span>
              <button className="add-to-cart-mini" onClick={() => addToCart(product)}>
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
              </button>
            </div>
            <div className="product-details">
              <p className="brand-name">{product.brand}</p>
              <h3 className="product-title">{product.name}</h3>
              <div className="price-section">
                <span className="current-price">₦{product.price.toLocaleString()}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>
      
      <section className="promo-banner">
        <div className="container">
          <span className="promo-label">Limited Time Offer</span>
          <h2>SEASON SALE: UP TO 30% OFF</h2>
          <CountdownTimer targetDate="2026-01-01T00:00:00" />
          <p className="promo-text">
            Use code:
            <strong className="copy-code-box" onClick={handleCopyCode} title="Click to copy">
              {copyStatus}
            </strong>
            at checkout
          </p>
        </div>
      </section>

      {/* --- SHOP BY CATEGORIES (At the bottom) --- */}
{/* --- SHOP BY CATEGORIES (At the bottom) --- */}
<section className="categories-section container">
  <div className="section-header">
    <h2>Shop By Categories</h2>
  </div>
  <div className="categories-scroll">
    {[
      { name: 'Men Shoes', img: shoe1 }, // Local Image
      { name: 'Women Corporate', img: off2 },
      { name: 'Kids Shoes', img: kid },
      { name: 'Men Corporate', img: office1 }, // Local Image
      { name: 'Nike Collection', img: nike9 }, // Local Image
      { name: 'Casual Wear', img: off1 }, // Local Image
      { name: 'Ladies Heels', img: h1 },
      { name: 'Sneakers', img: sneaker }
    ].map((cat, index) => (
      <div key={index} className="category-item">
        <div className="category-circle">
          <img src={cat.img} alt={cat.name} style={{ objectFit: 'cover' }} />
        </div>
        <p>{cat.name} →</p>
      </div>
    ))}
  </div>
</section>

      <section className="trust-badges container">
        <div className="badge-item">
          <div className="badge-icon">🚚</div>
          <h4>Free Delivery</h4>
          <p>On orders over $100</p>
        </div>
        <div className="badge-item">
          <div className="badge-icon">🛡️</div>
          <h4>Secure Payment</h4>
          <p>100% encrypted transactions</p>
        </div>
        <div className="badge-item">
          <div className="badge-icon">🔄</div>
          <h4>Easy Returns</h4>
          <p>30-day return policy</p>
        </div>
      </section>
    </div>
  );
};

export default Home;