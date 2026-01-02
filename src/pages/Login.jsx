import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  
  // New State
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');

  // Handle Remember Me on Load
  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simulate Remember Me
    if (rememberMe) {
      localStorage.setItem('rememberedEmail', email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }

    setIsSuccess(true);
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="auth-page container shoe-bg">
        <div className="auth-card card-shadow success-animation">
          <div className="check-circle">✅</div>
          <h1>Welcome Back!</h1>
          <p>Login successful. Taking you home...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page container shoe-bg">
      <div className="auth-card card-shadow">
        <h1>Sign In</h1>
        <form className="auth-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="Email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                required 
              />
              <span className="toggle-eye" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? '👁️‍🗨️' : '👁️'}
              </span>
            </div>
          </div>

          <div className="auth-helper-row">
            <label className="remember-me">
              <input 
                type="checkbox" 
                checked={rememberMe} 
                onChange={(e) => setRememberMe(e.target.checked)} 
              />
              <span>Remember Me</span>
            </label>
            <Link to="/forgot-password" name="forgot-password" className="forgot-link">Forgot Password?</Link>
          </div>

          <button className="btn-primary auth-btn">Login</button>
        </form>

        <div className="social-divider">
          <span>OR CONTINUE WITH</span>
        </div>

        <div className="social-login-group">
          <button className="social-btn google" type="button">Google</button>
          <button className="social-btn facebook" type="button">Facebook</button>
        </div>

        <p className="auth-footer">Don't have an account? <Link to="/register">Create one</Link></p>
      </div>
    </div>
  );
};

export default Login;