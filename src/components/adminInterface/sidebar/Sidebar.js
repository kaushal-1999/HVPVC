import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
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

        <NavLink to="/admin/Staff" className={({ isActive }) => (isActive ? 'active-link' : '')} tabIndex={0}>
          <span className="sidebar-icon" role="img" aria-label="staff">👨‍🏫</span>
          <span className="sidebar-text">Staff</span>
        </NavLink>

      </nav>
    </aside>
  );
};

export default Sidebar;
