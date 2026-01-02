import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner footer-grid">
        <div className="footer-col">
          <h4 style={{color: '#3f9e05'}}>SOLESTYLE</h4>
          <p>
            Redefining the way you move. Premium footwear designed for comfort, 
            durability, and timeless style.
          </p>
          <div className="social-links" style={{ marginTop: '1.5rem', display: 'flex', gap: '15px' }}>
             {/* Use icons if you have FontAwesome or Lucide React */}
            <span>FB</span> <span>TW</span> <span>IG</span>
          </div>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>New Arrivals</li>
            <li>Shipping Policy</li>
            <li>Returns & Exchanges</li>
            <li>Contact Support</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Join Our Newsletter</h4>
          <p style={{ marginBottom: '1rem' }}>
            Get 10% off your first order when you subscribe.
          </p>
          <div className="newsletter">
            <input type="email" placeholder="Email Address" />
            <button>SUBSRIBE</button>
          </div>
        </div>
      </div>

      <div className="footer-inner">
        <div className="footer-bottom">
          <p>&copy; 2026 SOLESTYLE. All rights reserved.</p>
          <div className="footer-legal">
            <span style={{ marginRight: '15px', cursor: 'pointer' }}>Privacy</span>
            <span style={{ cursor: 'pointer' }}>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;