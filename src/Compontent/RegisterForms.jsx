// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import { useDispatch } from "react-redux";
// import { registerUserRequest } from "../redux/UserAction"; 


// const RegisterForm = () => {
  
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
    
//     name: "",
//     password: "",
//     gender: "",
//     dob: "",
//     city: "",
//     state: "",
//   });

//   const [showToast, setShowToast] = useState(false);

//   const states = ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh", "Maharashtra"];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//  const dispatch = useDispatch();

// const handleSubmit = (e) => {
//   e.preventDefault();
//   dispatch(registerUserRequest(formData)); 
//   setShowToast(true);
//   setTimeout(() => {
//     setShowToast(false);
//     navigate("/TablePage");
//   }, 3000);
// };


//   return (
//     <div
//       className="d-flex justify-content-center align-items-center min-vh-100"
//       style={{
//         background: "linear-gradient(135deg, #f0f4ff, #dfeaf5)",
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//         padding: "20px",
//         position: "relative",
//       }}
//     >
//       <div
//         className="card shadow p-4"
//         style={{
//           width: "100%",
//           maxWidth: "500px",
//           borderRadius: "15px",
//           background: "#ffffffdd",
//           backdropFilter: "blur(10px)",
//           boxShadow: "0 4px 24px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <h4 className="text-center text-primary fw-bold mb-3">
//           <i className="bi bi-person-lines-fill me-2"></i>
//           Register
//         </h4>

//         <form onSubmit={handleSubmit}>
//           {/* Name */}
//           <div className="mb-2">
//             <label className="form-label fw-semibold">Name</label>
//             <div className="input-group">
//               <span className="input-group-text bg-white">
//                 <i className="bi bi-person-fill"></i>
//               </span>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="name"
//                 placeholder="Your name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           {/* Password */}
//           <div className="mb-2">
//             <label className="form-label fw-semibold">Password</label>
//             <div className="input-group">
//               <span className="input-group-text bg-white">
//                 <i className="bi bi-lock-fill"></i>
//               </span>
//               <input
//                 type="password"
//                 className="form-control"
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           {/* Gender */}
//           <div className="mb-2">
//             <label className="form-label fw-semibold">Gender</label>
//             <div className="d-flex gap-3">
//               <div className="form-check">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   name="gender"
//                   value="Male"
//                   checked={formData.gender === "Male"}
//                   onChange={handleChange}
//                 />
//                 <label className="form-check-label">Male</label>
//               </div>
//               <div className="form-check">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   name="gender"
//                   value="Female"
//                   checked={formData.gender === "Female"}
//                   onChange={handleChange}
//                 />
//                 <label className="form-check-label">Female</label>
//               </div>
//             </div>
//           </div>

//           {/* DOB */}
//           <div className="mb-2">
//             <label className="form-label fw-semibold">DOB</label>
//             <div className="input-group">
//               <span className="input-group-text bg-white">
//                 <i className="bi bi-calendar-event"></i>
//               </span>
//               <input
//                 type="date"
//                 className="form-control"
//                 name="dob"
//                 value={formData.dob}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           {/* City */}
//           <div className="mb-2">
//             <label className="form-label fw-semibold">City</label>
//             <div className="input-group">
//               <span className="input-group-text bg-white">
//                 <i className="bi bi-building"></i>
//               </span>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="city"
//                 placeholder="City"
//                 value={formData.city}
//                 onChange={handleChange}
//                 required />
//             </div>
//           </div>

//           {/* State */}
//           <div className="mb-3">
//             <label className="form-label fw-semibold">State</label>
//             <div className="input-group">
//               <span className="input-group-text bg-white">
//                 <i className="bi bi-geo-alt-fill"></i>
//               </span>
//               <select
//                 className="form-select"
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 required >
//                 <option value="">Select</option>
//                 {states.map((state, idx) => (
//                   <option key={idx} value={state}>
//                     {state}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary fw-semibold py-2">
//               <i className="bi bi-check-circle-fill me-2"></i>
//               Register
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Toast Message */}
//       {showToast && (
//         <div
//           className="position-fixed top-0 end-0 m-4"
//           style={{
//             backgroundColor: "#28a745",
//             color: "white",
//             padding: "16px 24px",
//             borderRadius: "12px",
//             boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
//             zIndex: 9999,
//             animation: "fadeIn 0.5s ease-in-out",
//             fontWeight: "500",
//             minWidth: "250px",
//             maxWidth: "300px",
//           }}>
//           <div className="d-flex justify-content-between align-items-center">
//             <span>
//               <i className="bi bi-check-circle-fill me-2"></i>
//               Registered Successfully!
//             </span>
//             <button
//               onClick={() => setShowToast(false)}
//               className="btn btn-sm btn-close btn-close-white ms-3"></button>
//           </div>
//         </div>
//       )}
//     </div>
//   );

// };

// export default RegisterForm;


// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import { useDispatch } from "react-redux";
// import { registerUserRequest } from "../redux/UserAction";

// const RegisterForm = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const dispatch = useDispatch();

//   const editUser = location.state?.user; 

//   const [formData, setFormData] = useState({
//     name: "",
//     password: "",
//     gender: "",
//     dob: "",
//     city: "",
//     state: "",
//   });

//   const [showToast, setShowToast] = useState(false);

//   const states = ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh", "Maharashtra"];

  
//   useEffect(() => {
//     if (editUser) {
//       setFormData(editUser);
//     }
//   }, [editUser]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     dispatch(registerUserRequest(formData)); 

//     setShowToast(true);
//     setTimeout(() => {
//       setShowToast(false);
//       navigate("/TablePage");
//     }, 3000);
//   };

//   return (
//     <div
//       className="d-flex justify-content-center align-items-center min-vh-100"
//       style={{
//         background: "linear-gradient(135deg, #f0f4ff, #dfeaf5)",
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//         padding: "20px",
//       }}
//     >
//       <div
//         className="card shadow p-4"
//         style={{
//           width: "100%",
//           maxWidth: "500px",
//           borderRadius: "15px",
//           background: "#ffffffdd",
//           backdropFilter: "blur(10px)",
//         }}
//       >
//         <h4 className="text-center text-primary fw-bold mb-3">
//           <i className="bi bi-person-lines-fill me-2"></i>
//           {editUser ? "Edit User" : "Register"}
//         </h4>

//         <form onSubmit={handleSubmit}>
//           {/* Name */}
//           <div className="mb-2">
//             <label className="form-label fw-semibold">Name</label>
//             <div className="input-group">
//               <span className="input-group-text bg-white">
//                 <i className="bi bi-person-fill"></i>
//               </span>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="name"
//                 placeholder="Your name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           {/* Password */}
//           <div className="mb-2">
//             <label className="form-label fw-semibold">Password</label>
//             <div className="input-group">
//               <span className="input-group-text bg-white">
//                 <i className="bi bi-lock-fill"></i>
//               </span>
//               <input
//                 type="password"
//                 className="form-control"
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           {/* Gender */}
//           <div className="mb-2">
//             <label className="form-label fw-semibold">Gender</label>
//             <div className="d-flex gap-3">
//               <div className="form-check">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   name="gender"
//                   value="Male"
//                   checked={formData.gender === "Male"}
//                   onChange={handleChange}
//                 />
//                 <label className="form-check-label">Male</label>
//               </div>
//               <div className="form-check">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   name="gender"
//                   value="Female"
//                   checked={formData.gender === "Female"}
//                   onChange={handleChange}
//                 />
//                 <label className="form-check-label">Female</label>
//               </div>
//             </div>
//           </div>

//           {/* DOB */}
//           <div className="mb-2">
//             <label className="form-label fw-semibold">DOB</label>
//             <div className="input-group">
//               <span className="input-group-text bg-white">
//                 <i className="bi bi-calendar-event"></i>
//               </span>
//               <input
//                 type="date"
//                 className="form-control"
//                 name="dob"
//                 value={formData.dob}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           {/* City */}
//           <div className="mb-2">
//             <label className="form-label fw-semibold">City</label>
//             <div className="input-group">
//               <span className="input-group-text bg-white">
//                 <i className="bi bi-building"></i>
//               </span>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="city"
//                 placeholder="City"
//                 value={formData.city}
//                 onChange={handleChange}
//                 required />
//             </div>
//           </div>

//           {/* State */}
//           <div className="mb-3">
//             <label className="form-label fw-semibold">State</label>
//             <div className="input-group">
//               <span className="input-group-text bg-white">
//                 <i className="bi bi-geo-alt-fill"></i>
//               </span>
//               <select
//                 className="form-select"
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 required >
//                 <option value="">Select</option>
//                 {states.map((state, idx) => (
//                   <option key={idx} value={state}>
//                     {state}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary fw-semibold py-2">
//               <i className="bi bi-check-circle-fill me-2"></i>
//               {editUser ? "Update" : "Register"}
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Toast */}
//       {showToast && (
//         <div
//           className="position-fixed top-0 end-0 m-4"
//           style={{
//             backgroundColor: "#28a745",
//             color: "white",
//             padding: "16px 24px",
//             borderRadius: "12px",
//             zIndex: 9999,
//             boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
//             fontWeight: "500",
//           }}>
//           <div className="d-flex justify-content-between align-items-center">
//             <span>
//               <i className="bi bi-check-circle-fill me-2"></i>
//               {editUser ? "Updated Successfully!" : "Registered Successfully!"}
//             </span>
//             <button
//               onClick={() => setShowToast(false)}
//               className="btn btn-sm btn-close btn-close-white ms-3"></button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RegisterForm;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useDispatch } from "react-redux";
import { registerUserRequest } from "../redux/UserAction"; 

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    password: "",
    gender: "",
    dob: "",
    city: "",
    state: "",
  });

  const [showToast, setShowToast] = useState(false);

  const states = ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh", "Maharashtra"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUserRequest(formData));
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      navigate("/TablePage");
    }, 2000);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        background: "linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)",
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: "100%",
          maxWidth: "520px",
          borderRadius: "20px",
          background: "#fff",
        }}
      >
        <h4 className="text-center text-dark fw-bold mb-4">
          <i className="bi bi-person-circle me-2 text-primary"></i>
          Create Your Account
        </h4>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-shield-lock-fill"></i></span>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Gender */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Gender</label>
            <div className="d-flex gap-4">
              <div className="form-check">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  className="form-check-input"
                  id="male"
                />
                <label className="form-check-label" htmlFor="male">Male</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  className="form-check-input"
                  id="female"
                />
                <label className="form-check-label" htmlFor="female">Female</label>
              </div>
            </div>
          </div>

          {/* DOB */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Date of Birth</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-calendar-event-fill"></i></span>
              <input
                type="date"
                name="dob"
                className="form-control"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* City */}
          <div className="mb-3">
            <label className="form-label fw-semibold">City</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-geo-alt-fill"></i></span>
              <input
                type="text"
                name="city"
                className="form-control"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* State */}
          <div className="mb-4">
            <label className="form-label fw-semibold">State</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-flag-fill"></i></span>
              <select
                name="state"
                className="form-select"
                value={formData.state}
                onChange={handleChange}
                required>
                <option value="">Select state</option>
                {states.map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="d-grid">
            <button type="submit" className="btn btn-success fw-bold py-2">
              <i className="bi bi-check-circle-fill me-2"></i>
              Register Now
            </button>
          </div>
        </form>
      </div>
      {/* Toast Message */}
      {showToast && (
        <div
          className="position-fixed top-0 end-0 m-4"
          style={{
            backgroundColor: "#28a745",
            color: "white",
            padding: "16px 24px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            zIndex: 9999,
            fontWeight: "500",
            animation: "fadeIn 0.5s ease-in-out",
          }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <span><i className="bi bi-check-circle-fill me-2"></i> Registered Successfully!</span>
            <button
              onClick={() => setShowToast(false)}
              className="btn btn-sm btn-close btn-close-white ms-3"
            ></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;