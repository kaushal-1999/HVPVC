import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ProfileUpdateModal from '../profile/ProfileUpdateModal'; // adjust path
import './Header.css';
import Alogo from '../../../assets/Alogo.jpg'; // replace with your hat-style logo path

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // Load user from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleUpdate = (updatedData) => {
    setUser(updatedData);
    localStorage.setItem('user', JSON.stringify(updatedData));
    setModalOpen(false);
    setDropdownOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) return null;

  return (
    <header className="header-container">
      {/* College Logo & Name */}
      <div className="header-logo" tabIndex={0}>
        <img
          src={Alogo} // replace with your hat-style logo path
          alt="College Logo"
          className="college-logo"
        />
        <span className="college-name">
          H.V. Patil Vidyalaya & Jr. College, Chinchghar
        </span>
      </div>

      {/* Profile Section */}
      <div
        className="profile-section"
        onClick={() => setDropdownOpen(prev => !prev)}
        tabIndex={0}
        aria-haspopup="true"
        aria-expanded={dropdownOpen}
        aria-label="User profile menu"
      >
        <FaUserCircle className="profile-icon" />
        <span className="profile-name">{user.name} ({user.role})</span>
        <FaChevronDown className={`chevron-icon ${dropdownOpen ? 'open' : ''}`} />

        {dropdownOpen && (
          <div className="profile-dropdown" role="menu">
            <div className="profile-info">
              <FaUserCircle className="profile-avatar" />
              <div>
                <p className="profile-name-dropdown">{user.name}</p>
                <p className="profile-email">{user.email}</p>
                <p className="profile-role">{user.role}</p>
              </div>
            </div>
            <ul className="dropdown-list">
              <li
                role="menuitem"
                tabIndex={0}
                onClick={() => {
                  setModalOpen(true);
                  setDropdownOpen(false);
                }}
              >
                Update Profile
              </li>
              <li role="menuitem" tabIndex={0} onClick={handleLogout}>
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Modal Popup */}
      <ProfileUpdateModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        currentUser={user}
        onUpdate={handleUpdate}
      />
    </header>
  );
};

export default Header;
