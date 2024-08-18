import './index.css'

import {FiInstagram} from 'react-icons/fi'
import {FaLinkedin} from 'react-icons/fa'

const Footer = () => (
  <footer className="footer">
    <div className="footer-all-container">
      <div className="footer-left">
        <h3> BE THE FIRST ONE TO KNOW </h3>
        <p> Sign up for Updates from metta muse </p>
        <div>
          <input
            type="email"
            placeholder="Enter your E-mail"
            className="mail"
          />
          <button className="btn" type="button">
            {' '}
            SUBSCRIBE NOW{' '}
          </button>
        </div>
      </div>
      <div className="contact-us">
        <h1> CONTACT US</h1>
        <p> +9999999999 </p>
        <p> customercare@mettamuse.com </p>
        <h3> CURRENCY </h3>
        <h4> USD </h4>
      </div>
    </div>
    <hr className="line" />

    <div className="footer-bottom">
      <div className="metta-muse">
        <h3>metta muse</h3>

        <h4> About Us </h4>
        <h4> Stories </h4>
        <h4> Artisans</h4>
        <h4> Boutiques </h4>
        <h4> Contact Us </h4>
        <h4> Eu Companies Docs </h4>
      </div>

      <div className="quick-links">
        <h3>QUICK LINKS</h3>

        <h4> Orders & Shipping </h4>
        <h4> Join/Login as a Seller </h4>
        <h4> Payment & Pricing</h4>
        <h4> Return & Refunds </h4>
        <h4> FAQ s </h4>
        <h4> Privacy Policy </h4>
        <h4> Terms & Conditions </h4>
      </div>

      <div className="icons-full-container">
        <div>
          <h1> FOLLOW US</h1>
        </div>
        <div className="icons-container">
          <FiInstagram className="icons" />
          <FaLinkedin className="icons" />
        </div>
      </div>
    </div>

    <div className="payments-full-container">
      <div className="accepts">
        <h3 className="accept-head"> metta muse ACCEPTS </h3>
      </div>
      <div className="payments-container">
        <img
          src="https://i.ibb.co/s10VF5Y/Screenshot-2024-08-17-200149.png"
          alt="mastercard"
          className="pay-img"
        />
        <img
          src="https://i.ibb.co/X4rBJTD/Screenshot-2024-08-17-200021.png"
          alt="amex"
          className="pay-img"
        />
        <img
          src="https://i.ibb.co/HtZ0m6z/Screenshot-2024-08-17-195922.png"
          alt="applepay"
          className="pay-img"
        />
        <img
          src="https://i.ibb.co/8jdy77P/Screenshot-2024-08-17-195840.png"
          alt="paypal"
          className="pay-img"
        />
        <img
          src="https://i.ibb.co/68gqhcx/Screenshot-2024-08-17-195703.png"
          alt="phonepe"
          className="pay-img"
        />
        <img
          src="https://i.ibb.co/wJH5PW6/Screenshot-2024-08-17-195803.png"
          alt="gpay"
          className="pay-img"
        />
      </div>
    </div>

    <p className="copy-right">&copy; 2023 metta muse. All rights reserved.</p>
  </footer>
)

export default Footer
