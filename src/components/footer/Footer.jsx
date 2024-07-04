import React from 'react';
import './footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='footer-content-logo' src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Venenatis cras sed felis eget velit aliquet. Tempus egestas sed sed
            risus pretium quam vulputate.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-234-5678-901</li>
            <li>contact@meokja.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copright">
        Copyright 2024 &copy; Meokja.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
