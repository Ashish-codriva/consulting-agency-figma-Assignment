import React from "react";
import "./Footer.css";
import logoImage from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-company">
          <div className="footer-logo">
            <span className=""> <img id="footer-logo" src={logoImage} alt="Crito Logo" /> </span>
            <span className="logo-text">Crito</span>
          </div>

          <p className="footer-description">
            Phasellus pulvinar porta turpis sit amet
            <br />
            facilisis sapien bibendum eu praesent massa.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <span>♧</span>
              <span>(888) 123-5678</span>
            </div>

            <div className="contact-item">
              <span>✉</span>
              <span>info@example.com</span>
            </div>
          </div>

          {/* App Buttons */}
          <div className="app-buttons">
            <a href="#" className="app-button">
              <span className="app-icon">▶</span>
              <span>
                <small>Available on</small>
                <strong>Google Play</strong>
              </span>
            </a>

            <a href="#" className="app-button">
              <span className="app-icon">●</span>
              <span>
                <small>Download on the</small>
                <strong>App Store</strong>
              </span>
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="footer-column">
          <h4>Useful Links</h4>
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Team</a>
        </div>

        {/* Help & Support */}
        <div className="footer-column">
          <h4>Help & Support</h4>
          <a href="#">FAQ</a>
          <a href="#">Blog</a>
          <a href="#">Contact Us</a>
          <a href="#">Support</a>
        </div>

        {/* Resources */}
        <div className="footer-column">
          <h4>Resources</h4>
          <a href="#">Guides and resources</a>
          <a href="#">Team</a>
          <a href="#">Tools</a>
          <a href="#">Support</a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="social-links">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Twitter">♥</a>
          <a href="#" aria-label="LinkedIn">in</a>
        </div>

        <p>© 2024 Crito. All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;