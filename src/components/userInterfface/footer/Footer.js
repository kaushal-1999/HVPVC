import React from "react";
import "./footer.css";
import Logo from "../../assets/logo.jpeg";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoMailUnread } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="FooterAlt">
      {/* Top Branding Section */}
      <div className="FooterTop">
        <div className="FooterBrand">
          <img src={Logo} alt="H.V. Patil Vidyalaya Chinchghar" className="FooterLogo" />
          <h2>H.V. Patil Vidyalaya Chinchghar</h2>
          <p>
            At Chinchghar Kudus, Tel. Wada, Dist. Palghar-421312, Maharashtra.
          </p>
        </div>

        {/* Quick Links + Actions */}
        <div className="FooterLinksSection">
          <div className="FooterLinks">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Act & Rules</a></li>
            </ul>
          </div>
          <div className="FooterActions">
            <h3>Membership</h3>
            <button onClick={() => navigate("/membership")} className="FooterBtn">
              Join Us
            </button>
            <button onClick={() => navigate("/membership")} className="FooterBtn outline">
              Download ID Card
            </button>
          </div>
        </div>
      </div>

      {/* Contact & Social Section */}
      <div className="FooterMiddle">
        <div className="FooterContact">
          <div><FaMapMarkerAlt /> Kudus, MH</div>
          <div><FaPhoneFlip /> +91 8483901049</div>
          <div><IoMailUnread /> officialaplemanavadhikar@gmail.com</div>
        </div>
        <div className="FooterSocial">
          <a href="#"><BsInstagram /></a>
          <a href="#"><RiTwitterXLine /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FiYoutube /></a>
        </div>
        <a
          href="https://razorpay.com/payment-button/pl_HAzswnhQYzXkey/view/?utm_source=payment_button&utm_medium=button&utm_campaign=payment_button"
          className="FooterDonateBtn"
        >
          Donate Now
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="FooterBottom">
        <p>
          ©2024 H.V. Patil Vidyalaya Chinchghar. Designed & maintained by{" "}
          <a href="https://kaushalportfolio.vercel.app/">Kaushal Patil</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
