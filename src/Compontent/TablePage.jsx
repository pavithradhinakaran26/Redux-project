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
//       <div className="card shadow rounded-4 border-0">
//         <div className="card-header bg-primary text-white text-center rounded-top-4">
//           <h3 className="mb-1 fw-bold">
//             <span role="img" aria-label="user">
//               👤
//             </span>{" "}
//             User Management
//           </h3>
//           <small className="text-white-50 fst-italic">Click Edit to update user details</small>
//         </div>

//         <div className="card-body p-4">
//           <div className="table-responsive">
//             <table className="table table-striped table-hover align-middle text-center">
//               <thead className="table-dark">
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
//                     <tr key={index} className="align-middle">
//                       <td className="text-capitalize fw-semibold">{user.name}</td>
//                       <td>
//                         <span style={{ letterSpacing: "0.3em" }}>••••••</span>
//                       </td>
//                       <td>{user.city}</td>
//                       <td>{user.state}</td>
//                       <td>{user.gender}</td>
//                       <td>{user.dob}</td>
//                       <td>
//                         <div className="d-flex justify-content-center gap-2">
//                           <button
//                             className="btn btn-outline-success btn-sm d-flex align-items-center gap-1"
//                             onClick={() => handleEdit(user)}
//                             aria-label={`Edit ${user.name}`}>
//                             <FaEdit />
//                              Edit
//                           </button>
//                           <button
//                             className="btn btn-outline-danger btn-sm d-flex align-items-center gap-1"
//                             onClick={() => handleDelete(user)}
//                             aria-label={`Delete ${user.name}`}>
//                             <FaTrash />
//                             Delete
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="7" className="text-muted py-4 fs-5">
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
import { useSelector } from "react-redux";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const TablePage = () => {
  const users = useSelector((state) => state.user.users);
  const navigate = useNavigate();

  const handleEdit = (user) => {
    navigate("/registerforms", { state: { user } });
  };

  const handleDelete = (user) => {
    alert(`Delete clicked for ${user.name}`);
  };

  return (
    <div className="container py-5">
      <div className="card shadow border-0 rounded-4">
        <div className="card-header text-white bg-gradient rounded-top-4" style={{ background: "linear-gradient(to right, #0066cc, #00ccff)" }}>
          <h2 className="text-center mb-0 fw-bold">👨‍💼 User Dashboard</h2>
          <p className="text-center text-white-50 fst-italic mb-0">Manage user information easily</p>
        </div>

        <div className="card-body bg-light px-4 py-4">
          <div className="table-responsive rounded-3">
            <table className="table table-bordered table-hover align-middle text-center bg-white shadow-sm">
              <thead className="table-primary text-dark">
                <tr>
                  <th>Name</th>
                  <th>Password</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Gender</th>
                  <th>DOB</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users && users.length > 0 ? (
                  users.map((user, index) => (
                    <tr key={index}>
                      <td className="text-capitalize fw-medium">{user.name}</td>
                      <td><span style={{ letterSpacing: "0.3em" }}>••••••</span></td>
                      <td>{user.city}</td>
                      <td>{user.state}</td>
                      <td>{user.gender}</td>
                      <td>{user.dob}</td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <button
                            className="btn btn-success btn-sm d-flex align-items-center gap-1"
                            onClick={() => handleEdit(user)}
                          >
                            <FaEdit /> Edit
                          </button>
                          <button
                            className="btn btn-danger btn-sm d-flex align-items-center gap-1"
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
                    <td colSpan="7" className="text-muted fs-5 py-4">
                      🚫 No user data found. Please register some users!
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
