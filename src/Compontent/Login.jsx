// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { loginRequest } from '../redux/LoginSlice';

// function Login() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [validated, setValidated] = useState(false);
//   const dispatch = useDispatch();

//   const togglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    

//     if (username.trim() === '' || password.trim() === '') {
//       setValidated(true);
//       return;
//     }

//     dispatch(loginRequest({ username, password }));
//     setValidated(false);
  
//   };
  

//   return (
//     <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
//       <div
//         className="card p-5 shadow-lg border-0"
//         style={{
//           maxWidth: '460px',
//           width: '100%',
//           borderRadius: '1.5rem',
//           background: 'rgba(255, 255, 255, 0.95)',
//         }}
//       >
//         <h2 className="text-center mb-4 fw-bold text-primary">Welcome Back 👋</h2>
//         <p className="text-center text-muted mb-4">Please enter your credentials to continue</p>

//         <form onSubmit={handleSubmit} noValidate>
         
//           <div className="mb-4">
//             <label className="form-label fw-semibold">Username</label>
//             <div className="input-group">
//               <span className="input-group-text bg-white border-end-0">
//                 <i className="bi bi-person-fill text-primary"></i>
//               </span>
//               <input
//                 type="text"
//                 className={`form-control border-start-0 ${validated && username.trim() === '' ? 'is-invalid' : ''}`}
//                 placeholder="Enter your username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>
//             {validated && username.trim() === '' && (
//               <div className="text-danger small mt-1">Username is required</div>
//             )}
//           </div>

//           {/* Password */}
//           <div className="mb-4">
//             <label className="form-label fw-semibold">Password</label>
//             <div className="input-group">
//               <span className="input-group-text bg-white border-end-0">
//                 <i className="bi bi-lock-fill text-primary"></i>
//               </span>
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 className={`form-control border-start-0 ${validated && password.trim() === '' ? 'is-invalid' : ''}`}
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <span className="input-group-text bg-white" style={{ cursor: 'pointer' }} onClick={togglePassword}>
//                 <i className={`bi ${showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'} text-secondary`}></i>
//               </span>
//             </div>
//             {validated && password.trim() === '' && (
//               <div className="text-danger small mt-1">Password is required</div>
//             )}
//           </div>

//           {/* Forgot Password */}
//           <div className="mb-3 text-end">
//             <a href="#" className="text-decoration-none small text-primary fw-medium">
//               Forgot Password?
//             </a>
//           </div>

//           {/* Submit Button */}
//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary btn-lg rounded-pill shadow-sm">
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../redux/LoginSlice';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();

  const togglePassword = () => setShowPassword(!showPassword);

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
    <div className="min-vh-100 d-flex justify-content-center align-items-center" style={{ background: '#f0f4f8' }}>
      <div className="card p-5 shadow-lg" style={{ width: '100%', maxWidth: '420px', borderRadius: '20px' }}>
        <h3 className="text-center fw-bold text-dark mb-3">🔐 Secure Login</h3>
        <p className="text-center text-muted mb-4">Access your account to continue</p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Username Field with Icon */}
          <div className="input-group mb-3">
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-person-fill text-primary"></i>
            </span>
            <input
              type="text"
              className={`form-control rounded-end ${validated && username.trim() === '' ? 'is-invalid' : ''}`}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {validated && username.trim() === '' && (
            <div className="text-danger small mb-3">Username is required</div>
          )}

          {/* Password Field with Icon and Toggle */}
          <div className="input-group mb-3 position-relative">
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-lock-fill text-primary"></i>
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              className={`form-control rounded-end ${validated && password.trim() === '' ? 'is-invalid' : ''}`}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="input-group-text bg-white border-start-0"
              onClick={togglePassword}
              style={{ cursor: 'pointer' }}
            >
              <i className={`bi ${showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'} text-secondary`}></i>
            </span>
          </div>
          {validated && password.trim() === '' && (
            <div className="text-danger small mb-3">Password is required</div>
          )}

          {/* Forgot Password */}
          <div className="text-end mb-3">
            <a href="#" className="small text-decoration-none text-primary">Forgot Password?</a>
          </div>

          {/* Login Button */}
          <div className="d-grid">
            <button type="submit" className="btn btn-dark rounded-pill py-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;