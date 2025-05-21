import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const TablePage = () => {
  const users = [
    {
      name: "Pavithra",
      password: "pavi678",
      city: "Orthanadu",
      state: "Tamil Nadu",
      gender: "Female",
      dob: "2003-9-26",
    },
    {
      name: "Bavya",
      password: "bavya1234",
      city: "Madurai",
      state: "Tamil Nadu",
      gender: "Female",
      dob: "2003-05-18",
    },
     {
      name: "Srinithi",
      password: "sri67788",
      city: "Madurai",
      state: "Tamil Nadu",
      gender: "Female",
      dob: "2002-07-19",
    },
  ];

  const handleEdit = (user) => {
    alert(`Edit clicked for ${user.name}`);
  };

  const handleDelete = (user) => {
    alert(`Delete clicked for ${user.name}`);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg rounded-4">
        <div className="card-body">
          <h3 className="text-center text-primary mb-4">User Details</h3>
          <div className="table-responsive">
            <table className="table table-hover table-bordered align-middle text-center">
              <thead className="table-primary">
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
                {users.length > 0 ? (
                  users.map((user, idx) => (
                    <tr key={idx}>
                      <td>{user.name}</td>
                      <td>{user.password}</td>
                      <td>{user.city}</td>
                      <td>{user.state}</td>
                      <td>{user.gender}</td>
                      <td>{user.dob}</td>
                      <td>
                        <button
                          className="btn btn-outline-primary btn-sm me-2"
                          onClick={() => handleEdit(user)}
                        >
                          <FaEdit /> Edit
                        </button>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => handleDelete(user)}
                        >
                          <FaTrash /> Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-muted">
                      No data available
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