import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from '../data/heroSliderData';
import '../styles/ProductDetail.css';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  
  const relatedProducts = products
    .filter(p => p.brand === product?.brand && p.id !== product?.id)
    .slice(0, 4);

  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImg, setMainImg] = useState(product?.images[0]);

  useEffect(() => {
    if (product) {
      setMainImg(product.images[0]);
      setSelectedSize(null);
      window.scrollTo(0, 0);
    }
  }, [id, product]);

  if (!product) return <div className="pd-error-container">Product not found</div>;

  return (
    <div className="pd-page-wrapper">
      <div className="pd-main-card pd-layout-grid">
        {/* LEFT: GALLERY */}
        <div className="pd-gallery-section">
          <img src={mainImg} alt={product.name} className="pd-hero-image" />
          <div className="pd-thumb-list">
            {product.images.map((img, i) => (
              <img 
                key={i} 
                src={img} 
                className={mainImg === img ? 'pd-thumb-active' : 'pd-thumb-item'} 
                onClick={() => setMainImg(img)} 
                alt="thumbnail" 
              />
            ))}
          </div>
        </div>

        {/* RIGHT: DETAILS */}
        <div className="pd-info-section">
          <div className="pd-breadcrumb-path">Home {'>'} {product.brand} {'>'} {product.name}</div>
          <p className="pd-brand-label">{product.brand}</p>
          <h1 className="pd-product-title">{product.name}</h1>
          
          <div className="pd-price-block">
            <span className="pd-current-price">${product.price}</span>
            <span className="pd-strike-price">${(product.price * 1.2).toFixed(2)}</span>
          </div>
          
          <div className="pd-size-selector">
            <h4 className="pd-selector-label">Select Size (EU)</h4>
            <div className="pd-size-buttons">
              {product.sizes.map(size => (
                <button 
                  key={size} 
                  className={selectedSize === size ? 'pd-btn-size active' : 'pd-btn-size'}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button 
            className="pd-add-to-cart-action"
            disabled={!selectedSize}
            onClick={() => addToCart(product, selectedSize, product.colors[0])}
          >
            {selectedSize ? 'ADD TO CART' : 'CHOOSE YOUR SIZE'}
          </button>
        </div>
      </div>

      {/* SPECIFICATIONS */}
      <section className="pd-specs-wrapper pd-main-card">
        <div className="pd-spec-box">
          <h3 className="pd-sub-heading">Specifications</h3>
          <table className="pd-data-table">
            <tbody>
              <tr><td>SKU</td><td>{product.brand.substring(0,2).toUpperCase()}-{product.id}099</td></tr>
              <tr><td>Color</td><td>{product.colors.join(', ')}</td></tr>
              <tr><td>Material</td><td>Premium Leather</td></tr>
              <tr><td>Year</td><td>2026 Edition</td></tr>
            </tbody>
          </table>
        </div>
        
        <div className="pd-spec-box">
          <h3 className="pd-sub-heading">Description</h3>
          <p className="pd-desc-text">{product.description}</p>
        </div>
      </section>

      {/* RELATED */}
      <section className="pd-related-wrapper pd-main-card">
        <h2 className="pd-section-title">Customers also viewed</h2>
        <div className="pd-related-grid">
          {relatedProducts.map(item => (
            <Link to={`/product/${item.id}`} key={item.id} className="pd-suggested-card">
              <img src={item.images[0]} alt={item.name} className="pd-suggested-img" />
              <div className="pd-suggested-meta">
                <p className="pd-item-name">{item.name}</p>
                <p className="pd-item-price">${item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;