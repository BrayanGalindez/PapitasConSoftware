import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { RiInstagramFill, RiFacebookFill, RiTwitterFill } from 'react-icons/ri';
import logo from '../../utils/logo.jpg';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="footer-contact">
            <div className="footer-contact-item">
              <FaEnvelope />
              <span>example@example.com</span>
            </div>
            <div className="footer-contact-item">
              <FaPhone />
              <span>(123) 456-7890</span>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-social">
            <RiInstagramFill />
            <RiFacebookFill />
            <RiTwitterFill />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copyright">
          &copy; {new Date().getFullYear()} Your Website. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;