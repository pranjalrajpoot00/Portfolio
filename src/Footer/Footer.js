import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-container">
          <div className="message-for-users">
            <span>
              Contact me
              <br />
              in any way you like
            </span>
          </div>
          <div className="social-links">
            <div className="social-links-h highlight">Social</div>
            <div className="social-links-items">
              {/* <a href="">Youtube</a> */}
              <a
                href="https://www.facebook.com/profile.php?id=100012981003950"
                target="_blank"
              >
                Facebook
              </a>
              <a href="https://www.instagram.com/tondakharsh/" target="_blank">
                Instagram
              </a>
              <a href="https://twitter.com/harshtondak" target="_blank">
                Twitter
              </a>
              <a href="https://github.com/HarshTondak" target="_blank">
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/harsh-tondak-a75742202/"
                target="_blank"
              >
                LinkedIn
              </a>
              {/* <a href="">Snapchat</a> */}
            </div>
          </div>
          <div className="social-links">
            <div className="social-links-h highlight">Contact</div>
            <div className="social-links-items">
              <a href="mailto: tondakharsh@gmail.com">E-Mail Me</a>
              {/* <a href="">Whatsapp</a>
              <a href="">Telegram</a> */}
              <a href="">+91 9650910XXX</a>
            </div>
          </div>
          <div className="footer-menu social-links">
            <div className="footer-menu-h social-links-h highlight">
              Other Menu
            </div>
            <div className="footer-menu-links social-links-items">
              <p className="footer-menu-links-items">
                <Link to="/">Home</Link>
              </p>
              <p className="footer-menu-links-items">
                <Link to="/about">About</Link>
              </p>
              <p className="footer-menu-links-items">
                <Link to="/projects">Projects</Link>
              </p>
              {/* <p className="footer-menu-links-items">
                <Link to="/contact">Contact.</Link>
              </p> */}
            </div>
          </div>
          <div className="footer-btn">
            <a href="mailto: tondakharsh@gmail.com" className="footer-btn-a">
              Get Started!
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="left-footer-bottom">
            <p>INDIA</p>
          </div>
          <div className="right-footer-bottom">
            <p>@2023. Harsh Tondak. ALL RIGHT RESERVED</p>
          </div>
        </div>
      </div>
      <div className="footer-ticker">
        <div className="footer-ticker-item">&nbsp; - Harsh Tondak </div>
        <div className="footer-ticker-item">&nbsp; - Harsh Tondak </div>
        <div className="footer-ticker-item">&nbsp; - Harsh Tondak </div>
        <div className="footer-ticker-item">&nbsp; - Harsh Tondak </div>
        <div className="footer-ticker-item">&nbsp; - Harsh Tondak </div>
        <div className="footer-ticker-item">&nbsp; - Harsh Tondak </div>
        <div className="footer-ticker-item">&nbsp; - Harsh Tondak </div>
        <div className="footer-ticker-item">&nbsp; - Harsh Tondak </div>
        <div className="footer-ticker-item">&nbsp; - Harsh Tondak </div>
        <div className="footer-ticker-item">&nbsp; - Harsh Tondak </div>
        <div className="footer-ticker-item">&nbsp; - Harsh Tondak </div>
        <div className="footer-ticker-item">&nbsp; - Harsh Tondak </div>
        <div className="footer-ticker-item">&nbsp; - Harsh Tondak </div>
        <div className="footer-ticker-item">&nbsp; - Harsh Tondak </div>
        <div className="footer-ticker-item">&nbsp; - Harsh Tondak </div>
        <div className="footer-ticker-item">&nbsp; - Harsh Tondak </div>
        <div className="footer-ticker-item">&nbsp; - Harsh Tondak </div>
        <div className="footer-ticker-item">&nbsp; - Harsh Tondak </div>
        <div className="footer-ticker-item">&nbsp; - Harsh Tondak </div>
        <div className="footer-ticker-item">&nbsp; - Harsh Tondak </div>
      </div>
    </div>
  );
}

export default Footer;
