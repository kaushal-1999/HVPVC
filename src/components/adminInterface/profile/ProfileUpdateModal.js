import React, { useState, useEffect, useRef } from "react";
import { FaTimes, FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ProfileUpdateModal.css";
import { API } from "../../../constant"; // should be "http://localhost:5000"

const ProfileUpdateModal = ({ isOpen, onClose, currentUser, setCurrentUser }) => {
  const [showPhotoUpdate, setShowPhotoUpdate] = useState(false);
  const [showPasswordUpdate, setShowPasswordUpdate] = useState(false);
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const modalRef = useRef(null);
  const token = localStorage.getItem("token");

  // Reset form on open
  useEffect(() => {
    if (isOpen) {
      setShowPhotoUpdate(false);
      setShowPasswordUpdate(false);
      setPhotoFile(null);
      setPhotoPreview(null);
      setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
    }
  }, [isOpen]);

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) onClose();
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!currentUser || !isOpen) return null;

  // ---------------- PHOTO UPDATE ----------------
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  const handlePhotoUpload = async (e) => {
    e.preventDefault();
    if (!photoFile) return toast.error("Please select a photo.");

    try {
      const formData = new FormData();
      formData.append("profilePhotoUrl", photoFile);

      const res = await axios.put(
        `${API}/me/profile-image`, // Correct URL
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(res.data.message);
      setCurrentUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setShowPhotoUpdate(false);
      setPhotoFile(null);
      setPhotoPreview(null);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || "Error updating profile photo");
    }
  };

  const cancelPhotoUpdate = () => {
    setPhotoFile(null);
    setPhotoPreview(null);
    setShowPhotoUpdate(false);
  };

  // ---------------- PASSWORD UPDATE ----------------
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    const { currentPassword, newPassword, confirmPassword } = passwordData;

    if (!currentPassword || !newPassword || !confirmPassword)
      return toast.error("All fields are required.");
    if (newPassword.length < 6) return toast.error("Password must be at least 6 characters.");
    if (newPassword !== confirmPassword) return toast.error("Passwords do not match.");

    try {
      const res = await axios.put(
        `${API}me/change-password`,
        passwordData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success(res.data.message);
      setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
      setShowPasswordUpdate(false);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || "Error changing password");
    }
  };

  const cancelPasswordUpdate = () => {
    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
    setShowPasswordUpdate(false);
  };

  return (
    <div className="modal-overlay">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="modal-content premium-modal" ref={modalRef}>
        <button className="modal-close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className="modal-title">Profile</h2>

        {/* Profile Header */}
        <div className="profile-header">
          {photoPreview ? (
            <img src={photoPreview} alt="Preview" className="profile-photo" />
          ) : currentUser.profilePhotoUrl ? (
            <img src={currentUser.profilePhotoUrl} alt="Profile" className="profile-photo" />
          ) : (
            <FaUserCircle className="profile-photo-placeholder" />
          )}
          <div className="profile-name">{currentUser.name}</div>
        </div>

        {/* Profile Info */}
        {!showPasswordUpdate && (
          <div className="profile-view">
            <p><strong>Email:</strong> {currentUser.email}</p>
            <p><strong>Role:</strong> {currentUser.role}</p>
            <div className="btn-group">
              <button className="btn-action" onClick={() => setShowPhotoUpdate(true)}>
                Update Profile Photo
              </button>
              <button className="btn-action" onClick={() => setShowPasswordUpdate(true)}>
                Change Password
              </button>
            </div>
          </div>
        )}

        {/* Photo Update Form */}
        {showPhotoUpdate && !showPasswordUpdate && (
          <form className="photo-form" onSubmit={handlePhotoUpload}>
            <input type="file" accept="image/*" onChange={handlePhotoChange} />
            <div className="btn-group-form">
              <button type="submit" className="btn-update">Update</button>
              <button type="button" className="btn-cancel" onClick={cancelPhotoUpdate}>Cancel</button>
            </div>
          </form>
        )}

        {/* Password Update Form */}
        {showPasswordUpdate && (
          <form className="password-form-vertical" onSubmit={handlePasswordUpdate}>
            <label>Current Password</label>
            <input type="password" name="currentPassword" value={passwordData.currentPassword} onChange={handlePasswordChange} />
            <label>New Password</label>
            <input type="password" name="newPassword" value={passwordData.newPassword} onChange={handlePasswordChange} />
            <label>Confirm New Password</label>
            <input type="password" name="confirmPassword" value={passwordData.confirmPassword} onChange={handlePasswordChange} />
            <div className="btn-group-form-vertical">
              <button type="submit" className="btn-update">Update</button>
              <button type="button" className="btn-cancel" onClick={cancelPasswordUpdate}>Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProfileUpdateModal;
