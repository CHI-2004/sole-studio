import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import { CartProvider } from './context/CartContext';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    /* 1. Wrap the entire app in CartProvider so all components can access the cart */
    <CartProvider> 
      <Router>
        {/* 2. Header no longer needs cartCount prop; it will get it from Context */}
        <Header /> 
        <main style={{ minHeight: '80vh' }}>
          <Routes>
            {/* 3. Pages no longer need addToCart or cart props passed manually */}
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </main>
        
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;