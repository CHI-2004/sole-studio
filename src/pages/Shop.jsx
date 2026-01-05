import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'; 
import { products } from '../data/products';
import '../styles/Shop.css';

const Shop = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  // URL Parameter listeners
  const brandFromUrl = queryParams.get('brand');
  const categoryFromUrl = queryParams.get('category');

  const [filterBrand, setFilterBrand] = useState(brandFromUrl || 'All');
  const [filterCategory, setFilterCategory] = useState(categoryFromUrl || 'All');

  useEffect(() => {
    if (brandFromUrl) setFilterBrand(brandFromUrl);
    if (categoryFromUrl) setFilterCategory(categoryFromUrl);
  }, [brandFromUrl, categoryFromUrl]);

  // Logic to filter by BOTH Brand and Category
  const filtered = products.filter(p => {
    const matchBrand = filterBrand === 'All' || p.brand.toLowerCase() === filterBrand.toLowerCase();
    const matchCategory = filterCategory === 'All' || (p.category && p.category.toLowerCase() === filterCategory.toLowerCase());
    return matchBrand && matchCategory;
  });

  return (
    <div className="shop-page container">
      <aside className="sidebar">
 {/* Brand Filter Section */}
<div className="filter-section">
  <h3>Brands</h3>
  <div className="filter-list">
    {/* ADD ALL YOUR BRANDS HERE */}
    {['All', 'Nike', 'Adidas', 'Jordan', 'Puma', 'Reebok', 'Vans', 'SoleStyle', 'Outdoor'].map(b => (
      <button 
        key={b} 
        className={`filter-btn ${filterBrand.toLowerCase() === b.toLowerCase() ? 'active' : ''}`} 
        onClick={() => { setFilterBrand(b); setFilterCategory('All'); }}
      >
        {b}
      </button>
    ))}
  </div>
</div>
        {/* New Category Filter Section */}
        <div className="filter-section" style={{ marginTop: '20px' }}>
          <h3>Categories</h3>
          <div className="filter-list">
            {['All', 'Kids', 'Office', 'Casual', 'Sport'].map(c => (
              <button 
                key={c} 
                className={`filter-btn ${filterCategory.toLowerCase() === c.toLowerCase() ? 'active' : ''}`} 
                onClick={() => { setFilterCategory(c); setFilterBrand('All'); }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <main className="shop-main">
        <header className="shop-header-card">
          <h1>
            {filterCategory !== 'All' ? `${filterCategory} Shoes` : 
             filterBrand !== 'All' ? `${filterBrand} Collection` : 'All Products'}
          </h1>
          <p className="results-count">{filtered.length} products found</p>
        </header>

        <div className="product-grid">
          {filtered.map(product => (
            <div key={product.id} className="product-card-jumia">
              <Link to={`/product/${product.id}`} className="card-link">
                <div className="img-wrapper">
                  <img src={product.images[0]} alt={product.name} loading="lazy" />
                  {product.discount > 0 && <span className="discount-tag">-{product.discount}%</span>}
                </div>
                <div className="product-info">
                  <p className="product-brand">{product.brand}</p>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="price-box">
                    <span className="current-price">₦{product.price.toLocaleString()}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Shop;