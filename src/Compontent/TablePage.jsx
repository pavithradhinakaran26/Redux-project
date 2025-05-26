// import React from "react";
// import { useSelector } from "react-redux";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from "react-router-dom";

// const TablePage = () => {
//   const users = useSelector((state) => state.user.users); 
//  const navigate = useNavigate();
//   // const handleEdit = (user) => {
//   //   alert(`Edit clicked for ${user.name}`);
//   // };
//    const handleEdit = (user) => {
//     navigate("/RegisterForms", { state: { user } }); 
//   };

//   const handleDelete = (user) => {
//     alert(`Delete clicked for ${user.name}`);
//   };
  

//   return (
//     <div className="container mt-5">
//       <div className="card shadow-lg rounded-4">
//         <div className="card-body">
//           <h3 className="text-center text-primary mb-4">User Details</h3>
//           <div className="table-responsive">
//             <table className="table table-hover table-bordered align-middle text-center">
//               <thead className="table-primary">
//                 <tr>
//                   <th>Name</th>
//                   <th>Password</th>
//                   <th>City</th>
//                   <th>State</th>
//                   <th>Gender</th>
//                   <th>DOB</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users && users.length > 0 ? (
//                   users.map((user, idx) => (
//                     <tr key={idx}>
//                       <td>{user.name}</td>
//                       <td>{user.password}</td>
//                       <td>{user.city}</td>
//                       <td>{user.state}</td>
//                       <td>{user.gender}</td>
//                       <td>{user.dob}</td>
//                       <td>
//                         <button
//                           className="btn btn-outline-primary btn-sm me-2"
//                           onClick={() => handleEdit(user)}
//                         >
//                           <FaEdit /> Edit
//                         </button>
//                         <button
//                           className="btn btn-outline-danger btn-sm"
//                           onClick={() => handleDelete(user)}
//                         >
//                           <FaTrash /> Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="7" className="text-muted">
//                       No data available
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TablePage;



// import React from "react";
// import { useSelector } from "react-redux";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// const TablePage = () => {
//   const users = useSelector((state) => state.user.users);
//   const navigate = useNavigate();

//   const handleEdit = (user) => {
//     navigate("/RegisterForms", { state: { user } });
//   };

//   const handleDelete = (user) => {
//     alert(`Delete clicked for ${user.name}`);
//   };

//   return (
//     <div className="container py-5">
//       <div className="card shadow-lg rounded-4 border-0">
//         <div className="card-header bg-primary text-white text-center rounded-top-4">
//           <h3 className="mb-0">👤 User Management</h3>
//           <small>Click edit to update user details</small>
//         </div>
//         <div className="card-body p-4">
//           <div className="table-responsive">
//             <table className="table table-striped table-hover table-bordered align-middle text-center">
//               <thead className="table-light">
//                 <tr>
//                   <th>Name</th>
//                   <th>Password</th>
//                   <th>City</th>
//                   <th>State</th>
//                   <th>Gender</th>
//                   <th>DOB</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users && users.length > 0 ? (
//                   users.map((user, index) => (
//                     <tr key={index}>
//                       <td className="text-capitalize">{user.name}</td>
//                       <td>••••••</td>
//                       <td>{user.city}</td>
//                       <td>{user.state}</td>
//                       <td>{user.gender}</td>
//                       <td>{user.dob}</td>
//                       <td>
//                         <button
//                           className="btn btn-outline-success btn-sm me-2"
//                           onClick={() => handleEdit(user)}
//                         >
//                           <FaEdit className="me-1" />
//                           Edit
//                         </button>
//                         <button
//                           className="btn btn-outline-danger btn-sm"
//                           onClick={() => handleDelete(user)}
//                         >
//                           <FaTrash className="me-1" />
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="7" className="text-muted py-4">
//                       No user data available.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TablePage;



import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";




const TablePage = () => {
  const users = useSelector((state) => state.user.users);
  const navigate = useNavigate();

  const handleEdit = (user) => {
    navigate("/RegisterForms", { state: { user } });
  };

  const handleDelete = (user) => {
    alert(`Delete clicked for ${user.name}`);
  };
  

  return (
    <div className="container py-5">
      <div className="card shadow-lg rounded-4 border-0">
        <div className="card-header bg-dark text-white text-center rounded-top-4">
          <h3 className="mb-0 fw-bold">
            <span role="img" aria-label="user">
              👤
            </span>{" "}
            User Management
          </h3>
          <small className="text-light">Click edit to update user details</small>
        </div>
        <div className="card-body p-4">
          <div className="table-responsive">
            <table className="table table-bordered table-hover text-center align-middle shadow-sm rounded">
              <thead className="table-primary text-dark">
                <tr>
                  <th className="bg-light">Name</th>
                  <th className="bg-light">Password</th>
                  <th className="bg-light">City</th>
                  <th className="bg-light">State</th>
                  <th className="bg-light">Gender</th>
                  <th className="bg-light">DOB</th>
                  <th className="bg-light">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users && users.length > 0 ? (
                  users.map((user, index) => (
                    <tr key={index} className="table-row">
                      <td className="text-capitalize">{user.name}</td>
                      <td>••••••</td>
                      <td>{user.city}</td>
                      <td>{user.state}</td>
                      <td>{user.gender}</td>
                      <td>{user.dob}</td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <button
                            className="btn btn-success btn-sm d-flex align-items-center gap-1 px-2"
                            onClick={() => handleEdit(user)}
                          >
                            <FaEdit /> Edit
                          </button>
                          <button
                            className="btn btn-danger btn-sm d-flex align-items-center gap-1 px-2"
                            onClick={() => handleDelete(user)}
                          >
                            <FaTrash /> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-muted py-4">
                      No user data available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablePage;