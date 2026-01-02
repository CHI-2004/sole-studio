import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroSlides } from '../data/heroSliderData';
import { Link } from 'react-router-dom';
import { products } from '../data/products'; 
import '../styles/HeroSlider.css';

const HeroSlider = ({ addToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    const interval = setInterval(() => { if (!isPaused) paginate(1); }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [isPaused, paginate]);

  const currentSlide = heroSlides[currentIndex];

  const linkedProduct = products.find(p => 
    p.id === currentSlide.productId || 
    p.name.toLowerCase().includes(currentSlide.name.toLowerCase().split(' ')[0])
  );

  // SILENT QUICK ADD LOGIC
  const handleQuickAdd = () => {
    const targetProduct = linkedProduct || products[0];
    
    if (targetProduct) {
      const size = targetProduct.sizes ? targetProduct.sizes[0] : 42;
      const color = targetProduct.colors ? targetProduct.colors[0] : 'Default';
      
      // Execute addition silently (feedback provided by Header pulse)
      addToCart(targetProduct, size, color);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
  className="hero-slider" 
  style={{ 
    backgroundColor: currentSlide.bgColor,
    "--accent": currentSlide.accentColor // Variable defined here updates every slide
  }}
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
>
  <AnimatePresence initial={false} custom={direction} mode="wait">
    <motion.div
      key={currentIndex}
      className="slide-container"
    >
      <div className="slide-content container">
        <div className="text-area">
          <motion.h2 className="slide-brand-title">{currentSlide.name}</motion.h2>
          <motion.p className="slide-tagline">{currentSlide.tagline}</motion.p>

          <motion.div className="hero-action-group">
            {/* Pricing removed as requested */}
            <div className="hero-buttons">
              <button onClick={handleQuickAdd} className="btn-primary shop-btn">
                Quick Add +
              </button>
              <Link 
                to={linkedProduct ? `/product/${linkedProduct.id}` : "/shop"} 
                className="view-btn"
              >
                View Details →
              </Link>
            </div>
          </motion.div>
        </div>

            <motion.div className="image-area">
              <img src={currentSlide.image} alt={currentSlide.name} />
              <div className="image-shadow"></div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="scroll-top-btn"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>

      <div className="slider-controls">
        <button className="control-btn" onClick={() => paginate(-1)}>←</button>
        <div className="indicators">
          {heroSlides.map((_, idx) => (
            <span 
              key={idx} 
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => { setDirection(idx > currentIndex ? 1 : -1); setCurrentIndex(idx); }}
            />
          ))}
        </div>
        <button className="control-btn" onClick={() => paginate(1)}>→</button>
      </div>
    </section>
  );
};

export default HeroSlider;