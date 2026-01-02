import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Email, 2: Code, 3: Success
  const [code, setCode] = useState('');

  const handleVerify = (e) => {
    e.preventDefault();
    if (code === '1234') setStep(3);
    else alert('Try 1234');
  };

  return (
    <div className="auth-page container shoe-bg">
      <div className="auth-card card-shadow">
        <h1>{step === 1 ? 'Reset Password' : step === 2 ? 'Verify Code' : 'Success!'}</h1>
        
        {step === 1 && (
          <form className="auth-form" onSubmit={() => setStep(2)}>
            <p>Enter email to receive reset code.</p>
            <input type="email" placeholder="Email" required />
            <button className="btn-primary auth-btn">Send Code</button>
          </form>
        )}

        {step === 2 && (
          <form className="auth-form" onSubmit={handleVerify}>
            <p>Enter the 4-digit code (1234).</p>
            <input type="text" placeholder="0000" maxLength="4" onChange={(e) => setCode(e.target.value)} required />
            <button className="btn-primary auth-btn">Verify Code</button>
          </form>
        )}

        {step === 3 && (
          <div className="success-animation">
            <div className="check-circle">✅</div>
            <p>Password verified. You can now login.</p>
            <button className="btn-primary auth-btn" onClick={() => navigate('/login')}>Back to Login</button>
          </div>
        )}
        
        {step !== 3 && <Link to="/login" className="back-link">← Back to Login</Link>}
      </div>
    </div>
  );
};

export default ForgotPassword;