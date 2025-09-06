import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Section */}
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            H.V.Patil Vidyalaya & Jr. College Chinchghar is dedicated to
            providing quality education and shaping bright futures.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/departments">Departments</Link></li>
            <li><Link to="/faculty">Faculty</Link></li>
            <li><Link to="/notice">Notice</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Email: info@hvpatilcollege.com</p>
          <p>Phone: +91 88888 88888</p>
          <p>Address: Chinchghar, Maharashtra</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} H.V.Patil Vidyalaya & Jr. College Chinchghar.
          All Rights Reserved.
        </p>
        <p className="developer-credit">
          Developed by <a href="https://kaushalportfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
            Kaushal Patil.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
