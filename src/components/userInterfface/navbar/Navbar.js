import React from 'react';
import './navbar.css';
import Logo from '../../../assets/logo.png'; // ensure file exists
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { ImCross } from "react-icons/im";
import { UseAppCtx } from '../../../context/AppContext';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const { navbarState, toggle } = UseAppCtx();

  return (
    <header>
      <nav className="nav">
        <div className="nav-brand">
          <img className="brand-logo" src={Logo} alt="College Logo" />
          <a className="brand-name" href="/">H.V.Patil Vidyalaya & Jr.Collage Chinchghar</a>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links desktop">
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/departments" >Departments</Link></li>
          <li><Link to="/gallery" >Gallery</Link></li>
          <li><Link to="/notice" >Notice</Link></li>
          <li><Link to="/events" >Events</Link></li>
          <li><Link to="/about" >About Us</Link></li>
          <li><Link to="/contact" >Contact Us</Link></li>
        </ul>

        {/* CTA Button */}
        <button 
          className="btn-member" 
          onClick={() => navigate('/admission')}
        >
          Admission
        </button>

        {/* Toggle Button */}
        <div className="toggle-button" onClick={toggle}>
          {navbarState ? <ImCross /> : <HiOutlineBars3CenterLeft />}
        </div>
      </nav>

      {/* Mobile Menu */}
      <ul className={`nav-links mobile ${navbarState ? "active" : ""}`}>
        <li><Link to="/" onClick={toggle}>Home</Link></li>
        <li><Link to="/departments" onClick={toggle}>Departments</Link></li>
        <li><Link to="/faculty" onClick={toggle}>Faculty</Link></li>
        <li><Link to="/notice" onClick={toggle}>Notice</Link></li>
        <li><Link to="/events" onClick={toggle}>Events</Link></li>
        <li><Link to="/about" onClick={toggle}>About Us</Link></li>
        <li><Link to="/contact" onClick={toggle}>Contact Us</Link></li>
        <button 
          className="btn-member-mobile" 
          onClick={() => { toggle(); navigate('/admission'); }}
        >
          Admission
        </button>
      </ul>
    </header>
  );
};

export default Navbar;
