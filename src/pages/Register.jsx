import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', password: '', confirmPassword: ''
  });

  const [isVerifying, setIsVerifying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // New State
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const [strength, setStrength] = useState({ label: 'Weak', color: 'red', score: 0 });

  // Password Strength Logic
  useEffect(() => {
    const pass = formData.password;
    let score = 0;
    if (pass.length >= 6) score++;
    if (pass.length >= 10) score++;
    if (/[0-9]/.test(pass) && /[^A-Za-z0-9]/.test(pass)) score++;

    if (score === 0) setStrength({ label: 'Weak', color: '#ff4d4d', score: 1 });
    else if (score === 1) setStrength({ label: 'Medium', color: '#ffa500', score: 2 });
    else if (score >= 2) setStrength({ label: 'Strong', color: '#2e7d32', score: 3 });
  }, [formData.password]);

  const isFormValid = 
    formData.firstName && 
    formData.lastName && 
    formData.email.includes('@') && 
    strength.label === 'Strong' && // Disabled until Strong
    formData.password === formData.confirmPassword;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsVerifying(true);
      setError('');
    }, 1500);
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    if (verificationCode === '1234') {
      setIsSuccess(true);
      setTimeout(() => navigate('/login'), 3000);
    } else {
      setError('Invalid verification code. Try "1234".');
    }
  };

  if (isSuccess) {
    return (
      <div className="auth-page container shoe-bg">
        <div className="auth-card card-shadow success-flow">
          <span className="success-icon">✅</span>
          <h1>Success!</h1>
          <p>Your account has been successfully created.</p>
          <p className="redirect-note">Redirecting you to Login...</p>
        </div>
      </div>
    );
  }

  if (isVerifying) {
    return (
      <div className="auth-page container shoe-bg">
        <div className="auth-card card-shadow">
          <h1>Verify Email</h1>
          <p>Code sent to <strong>{formData.email}</strong></p>
          <form className="auth-form" onSubmit={handleVerifyCode}>
            <div className="input-group">
              <label>Enter Code</label>
              <input type="text" placeholder="0000" maxLength="4" onChange={(e) => setVerificationCode(e.target.value)} required />
            </div>
            {error && <p className="error-text">{error}</p>}
            <button className="btn-primary auth-btn">Verify & Create Account</button>
          </form>
          <button className="btn-text" onClick={() => setIsVerifying(false)}>Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page container shoe-bg">
      <div className="auth-card card-shadow">
        <h1>Create Account</h1>
        <form className="auth-form" onSubmit={handleRegisterSubmit}>
          <div className="form-row">
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} required />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} required />
          </div>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
          
          <div className="input-group">
            <div className="password-wrapper">
              <input type={showPwd ? "text" : "password"} name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
              <span className="toggle-eye" onClick={() => setShowPwd(!showPwd)}>{showPwd ? '👁️‍🗨️' : '👁️'}</span>
            </div>
            {/* Strength Meter */}
            <div className="strength-meter-container">
              <div className="strength-bar" style={{ width: `${(strength.score / 3) * 100}%`, backgroundColor: strength.color }}></div>
            </div>
            <p className="strength-label" style={{ color: strength.color }}>{strength.label}</p>
          </div>

          <div className="password-wrapper">
            <input type={showConfirmPwd ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password" onChange={handleInputChange} required />
            <span className="toggle-eye" onClick={() => setShowConfirmPwd(!showConfirmPwd)}>{showConfirmPwd ? '👁️‍🗨️' : '👁️'}</span>
          </div>

          <button className={`btn-primary auth-btn ${isLoading ? 'loading' : ''}`} disabled={!isFormValid || isLoading}>
            {isLoading ? 'Sending Code...' : 'Create Account'}
          </button>
        </form>
        <p className="auth-footer">Already have an account? <Link to="/login">Sign In</Link></p>
      </div>
    </div>
  );
};

export default Register;