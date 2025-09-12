import React, { useState, useEffect } from "react";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProfileUpdateModal from "../profile/ProfileUpdateModal";
import Alogo from "../../../assets/Alogo.jpg";
import "./Header.css";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
    else navigate("/login");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <header className="header-container">
      <div className="header-logo">
        <img src={Alogo} alt="College Logo" className="college-logo" />
        <span className="college-name">H.V. Patil Vidyalaya & Jr. College, Chinchghar</span>
      </div>

      <div className="profile-section" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <FaUserCircle className="profile-icon" />
        <span className="profile-name">{user.name} ({user.role})</span>
        <FaChevronDown className={`chevron-icon ${dropdownOpen ? "open" : ""}`} />
        {dropdownOpen && (
          <div className="profile-dropdown">
            <div className="profile-info">
              <FaUserCircle className="profile-avatar" />
              <div>
                <p className="profile-name-dropdown">{user.name}</p>
                <p className="profile-email">{user.email}</p>
                <p className="profile-role">{user.role}</p>
              </div>
            </div>
            <ul className="dropdown-list">
              <li onClick={() => { setModalOpen(true); setDropdownOpen(false); }}>Update Profile</li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          </div>
        )}
      </div>

      <ProfileUpdateModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        currentUser={user}
        setCurrentUser={(updated) => { setUser(updated); localStorage.setItem("user", JSON.stringify(updated)); }}
      />
    </header>
  );
};

export default Header;
