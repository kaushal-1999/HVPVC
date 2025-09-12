import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../../../constant";
import "./Staff.css";

const Staff = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Staff",
    staffType: "Teacher",
  });

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5); // Default to 5 users per page

  const token = localStorage.getItem("token");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API}/users`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(response.data);
    } catch (error) {
      alert("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Pagination calculations
  const totalPages = Math.ceil(users.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUser = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.role || !formData.password) {
      return alert("All fields are required!");
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return alert("Please enter a valid email address.");
    }
    if (formData.password.length < 6) {
      return alert("Password must be at least 6 characters long.");
    }
    if (formData.role === "Staff" && !["Teacher", "OfficeStaff"].includes(formData.staffType)) {
      return alert("Invalid staff type!");
    }

    try {
      setSubmitting(true);
      await axios.post(
        `${API}/user/register`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setShowAddModal(false);
      setFormData({ name: "", email: "", password: "", role: "Staff", staffType: "Teacher" });
      fetchUsers();
    } catch (err) {
      alert(err.response?.data?.error || "Failed to add user");
    } finally {
      setSubmitting(false);
    }
  };

  const toggleUserStatus = async (userId, currentStatus) => {
    const action = currentStatus ? "deactivate" : "activate";
    if (!window.confirm(`Are you sure you want to ${action} this user?`)) return;

    try {
      setLoading(true);
      await axios.patch(
        `${API}/user/${userId}/status`,
        { isActive: !currentStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchUsers();
    } catch {
      alert("Failed to update status");
    } finally {
      setLoading(false);
    }
  };

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setShowViewModal(true);
  };

  const closeModals = () => {
    setShowAddModal(false);
    setShowViewModal(false);
    setSelectedUser(null);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleUsersPerPageChange = (e) => {
    setUsersPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="staff-container">
      <div className="staff-header">
        <h1>User Management</h1>
        <button className="btn-add" onClick={() => setShowAddModal(true)}>
          Add User
        </button>
      </div>

      {/* Users per page selector */}
      <div className="pagination-controls">
        <label htmlFor="usersPerPage">Show </label>
        <select
          id="usersPerPage"
          value={usersPerPage}
          onChange={handleUsersPerPageChange}
        >
          <option value={5}>5</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span> users</span>
      </div>

      {/* Users Table */}
      <div className="table-wrapper">
        <table className="staff-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role / Staff Type</th>
              <th>Status</th>
              <th>Created By</th>
              <th>Disabled By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.length === 0 ? (
              <tr>
                <td colSpan={7} style={{ textAlign: "center" }}>
                  No users found.
                </td>
              </tr>
            ) : (
              currentUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role === "Staff" ? user.staffType : user.role}</td>
                  <td>
                    <span
                      className={`status-dot ${user.isActive ? "active" : "inactive"}`}
                    ></span>
                    {user.isActive ? "Active" : "Inactive"}
                  </td>
                  <td>{user.createdBy ? user.createdBy.name : "Unknown"}</td>
                  <td>{user.disabledBy ? user.disabledBy.name : "N/A"}</td>
                  <td>
                    <button
                      className={`btn-update ${user.isActive ? "deactivate" : "activate"}`}
                      onClick={() => toggleUserStatus(user._id, user.isActive)}
                    >
                      {user.isActive ? "Deactivate" : "Activate"}
                    </button>
                    <button className="btn-view" onClick={() => handleViewUser(user)}>
                      View
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="pagination-pages">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            className={`page-btn ${currentPage === num ? "active" : ""}`}
            onClick={() => handlePageChange(num)}
          >
            {num}
          </button>
        ))}
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add New User</h2>
            <form onSubmit={handleAddUser}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Role
                <select name="role" value={formData.role} onChange={handleInputChange}>
                  <option value="Admin">Admin</option>
                  <option value="Staff">Staff</option>
                </select>
              </label>
              {formData.role === "Staff" && (
                <label>
                  Staff Type
                  <select name="staffType" value={formData.staffType} onChange={handleInputChange}>
                    <option value="Teacher">Teacher</option>
                    <option value="OfficeStaff">OfficeStaff</option>
                  </select>
                </label>
              )}
              <div className="modal-actions">
                <button type="submit" className="btn-submit" disabled={submitting}>
                  {submitting ? "Adding..." : "Add User"}
                </button>
                <button type="button" className="btn-cancel" onClick={closeModals}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View User Modal */}
      {showViewModal && selectedUser && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>User Details</h2>
            <div className="user-details">
              <p><strong>Name:</strong> {selectedUser.name}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Role:</strong> {selectedUser.role}</p>
              {selectedUser.role === "Staff" && (
                <p><strong>Staff Type:</strong> {selectedUser.staffType}</p>
              )}
              <p>
                <strong>Status:</strong>{" "}
                <span className={`status-dot ${selectedUser.isActive ? "active" : "inactive"}`}></span>
                {selectedUser.isActive ? "Active" : "Inactive"}
              </p>
              <p>
                <strong>Created By:</strong>{" "}
                {selectedUser.createdBy ? selectedUser.createdBy.name : "Unknown"}
              </p>
              <p>
                <strong>Disabled By:</strong>{" "}
                {selectedUser.disabledBy ? selectedUser.disabledBy.name : "N/A"}
              </p>
              <p><strong>Created At:</strong> {new Date(selectedUser.createdAt).toLocaleString()}</p>
              <p><strong>Updated At:</strong> {new Date(selectedUser.updatedAt).toLocaleString()}</p>
            </div>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={closeModals}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Staff;
