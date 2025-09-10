import React, { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import './ProfileUpdateModal.css';

const ProfileUpdateModal = ({ isOpen, onClose, currentUser, onUpdate }) => {
  const [showPhotoUpdate, setShowPhotoUpdate] = useState(false);
  const [showPasswordUpdate, setShowPasswordUpdate] = useState(false);
  const [photoFile, setPhotoFile] = useState(null);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setShowPhotoUpdate(false);
      setShowPasswordUpdate(false);
      setPhotoFile(null);
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    }
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) onClose();
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!currentUser || !isOpen) return null;

  // Photo handlers
  const handlePhotoChange = e => setPhotoFile(e.target.files[0]);
  const handlePhotoUpload = e => {
    e.preventDefault();
    if (!photoFile) return alert('Select a photo');
    onUpdate({ profilePhoto: photoFile });
    setShowPhotoUpdate(false);
  };
  const cancelPhotoUpdate = () => {
    setPhotoFile(null);
    setShowPhotoUpdate(false);
  };

  // Password handlers
  const handlePasswordChange = e => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };
  const handlePasswordUpdate = e => {
    e.preventDefault();
    const { currentPassword, newPassword, confirmPassword } = passwordData;
    if (!currentPassword || !newPassword || !confirmPassword)
      return alert('All fields required');
    if (newPassword.length < 6) return alert('Password must be 6+ chars');
    if (newPassword !== confirmPassword) return alert('Passwords do not match');
    onUpdate({ passwordData });
    setShowPasswordUpdate(false);
  };
  const cancelPasswordUpdate = () => {
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    setShowPasswordUpdate(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content premium-modal" ref={modalRef}>
        <button className="modal-close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className="modal-title">Profile</h2>

        {/* Profile Header */}
        <div className="profile-header">
          {currentUser.profilePhotoUrl ? (
            <img src={currentUser.profilePhotoUrl} alt="Profile" className="profile-photo" />
          ) : (
            <div className="profile-photo-placeholder">A</div>
          )}
          <div className="profile-name">{currentUser.name}</div>
        </div>

        {/* Profile Info: hide when changing password */}
        {!showPasswordUpdate && (
          <div className="profile-view">
            <p><strong>Email:</strong> {currentUser.email}</p>
            <p><strong>Role:</strong> {currentUser.role}</p>

            <div className="btn-group">
              <button
                className="btn-action"
                onClick={() => setShowPhotoUpdate(prev => !prev)}
              >
                Update Profile Photo
              </button>
              <button
                className="btn-action"
                onClick={() => setShowPasswordUpdate(true)}
              >
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
              <button type="button" className="btn-cancel" onClick={cancelPhotoUpdate}>
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Password Update Form: vertical layout */}
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
              <button type="button" className="btn-cancel" onClick={cancelPasswordUpdate}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProfileUpdateModal;
