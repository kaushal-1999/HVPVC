import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  // Get user info from localStorage
  let user = null;
  try {
    const userStr = localStorage.getItem('user');
    user = userStr ? JSON.parse(userStr) : null;
  } catch (e) {
    console.error("Error parsing user from localStorage", e);
  }

  // Determine if user is staff (and not Admin/SuperAdmin)
  const isStaff = user?.role === 'Staff' && user?.staffType === 'OfficeStaff';

  return (
    <aside className="admin-sidebar" role="navigation" aria-label="Admin sidebar">
      <nav className="sidebar-nav">

        <NavLink to="/admin/dashboard" className={({ isActive }) => (isActive ? 'active-link' : '')} tabIndex={0}>
          <span className="sidebar-icon" role="img" aria-label="dashboard">📊</span>
          <span className="sidebar-text">Dashboard</span>
        </NavLink>

        <NavLink to="/admin/Slider" className={({ isActive }) => (isActive ? 'active-link' : '')} tabIndex={0}>
          <span className="sidebar-icon" role="img" aria-label="slider">🖼️</span>
          <span className="sidebar-text">Slider</span>
        </NavLink>

        <NavLink to="/admin/gallery" className={({ isActive }) => (isActive ? 'active-link' : '')} tabIndex={0}>
          <span className="sidebar-icon" role="img" aria-label="gallery">📷</span>
          <span className="sidebar-text">Gallery</span>
        </NavLink>

        <NavLink to="/admin/Notice" className={({ isActive }) => (isActive ? 'active-link' : '')} tabIndex={0}>
          <span className="sidebar-icon" role="img" aria-label="notice">📢</span>
          <span className="sidebar-text">Notice</span>
        </NavLink>

        <NavLink to="/admin/Events" className={({ isActive }) => (isActive ? 'active-link' : '')} tabIndex={0}>
          <span className="sidebar-icon" role="img" aria-label="events">🎉</span>
          <span className="sidebar-text">Events</span>
        </NavLink>

        {/* ✅ Hide Staff nav item for OfficeStaff users */}
        {!isStaff && (
          <NavLink to="/admin/Staff" className={({ isActive }) => (isActive ? 'active-link' : '')} tabIndex={0}>
            <span className="sidebar-icon" role="img" aria-label="staff">👨‍🏫</span>
            <span className="sidebar-text">Staff</span>
          </NavLink>
        )}

      </nav>
    </aside>
  );
};

export default Sidebar;
