import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../redux/LoginSlice';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    if (username.trim() === '' || password.trim() === '') {
      setValidated(true);
      return;
    }

    dispatch(loginRequest({ username, password }));
    setValidated(false);
  
  };
  

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card p-5 shadow-lg border-0"
        style={{
          maxWidth: '460px',
          width: '100%',
          borderRadius: '1.5rem',
          background: 'rgba(255, 255, 255, 0.95)',
        }}
      >
        <h2 className="text-center mb-4 fw-bold text-primary">Welcome Back 👋</h2>
        <p className="text-center text-muted mb-4">Please enter your credentials to continue</p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Username */}
          <div className="mb-4">
            <label className="form-label fw-semibold">Username</label>
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <i className="bi bi-person-fill text-primary"></i>
              </span>
              <input
                type="text"
                className={`form-control border-start-0 ${validated && username.trim() === '' ? 'is-invalid' : ''}`}
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            {validated && username.trim() === '' && (
              <div className="text-danger small mt-1">Username is required</div>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="form-label fw-semibold">Password</label>
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <i className="bi bi-lock-fill text-primary"></i>
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                className={`form-control border-start-0 ${validated && password.trim() === '' ? 'is-invalid' : ''}`}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="input-group-text bg-white" style={{ cursor: 'pointer' }} onClick={togglePassword}>
                <i className={`bi ${showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'} text-secondary`}></i>
              </span>
            </div>
            {validated && password.trim() === '' && (
              <div className="text-danger small mt-1">Password is required</div>
            )}
          </div>

          {/* Forgot Password */}
          <div className="mb-3 text-end">
            <a href="#" className="text-decoration-none small text-primary fw-medium">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg rounded-pill shadow-sm">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;