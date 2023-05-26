import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-column">
              <div className="footer-logo">
                <img src={'../utils/logo.png'} alt="Logo" />
              </div>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <EmailIcon />
                  <span>example@example.com</span>
                </div>
                <div className="footer-contact-item">
                  <PhoneIcon />
                  <span>(123) 456-7890</span>
                </div>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-social">
                <InstagramIcon />
                <FacebookIcon />
                <TwitterIcon />
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

}

export default Footer;