import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { RiInstagramFill, RiFacebookFill, RiTwitterFill } from 'react-icons/ri';
import '../../styles/Home/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <div className="footer-contact-item">
            <FaEnvelope className="footer-icon" />
            <span>example@example.com</span>
          </div>
          <div className="footer-contact-item">
            <FaPhone className="footer-icon" />
            <span>(123) 456-7890</span>
          </div>
        </div>
        <div className="footer-social">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <RiInstagramFill className="footer-icon" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <RiFacebookFill className="footer-icon" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <RiTwitterFill className="footer-icon" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;