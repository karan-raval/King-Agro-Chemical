import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path to your logo
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Left Section - Logo and Info */}
        <div className="footer-logo-section">
          <img src={logo} alt="Tyrone Agro Chemicals" className="footer-logo" />
          <p className="footer-tagline">
            Manufacturer of <span className="highlight">Pesticides & Fertilizer</span>
          </p>
          <div className="footer-socials">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <button className="footer-btn">Download Brochure</button>
        </div>

        {/* Middle Section - Navigation and Products */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Navigation</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/download">Download</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="footer-column">
            <h4>Product Category</h4>
            <Link to="/products/ampulse">Ampulse Packing</Link>
            <Link to="/products/insecticides">Insecticides</Link>
            <Link to="/products/fungicides">Fungicides</Link>
            <Link to="/products/pgr">PGR</Link>
          </div>
        </div>

        {/* Right Section - Contact Info */}
        <div className="footer-contact">
          <h4>Contact Details</h4>
          <p>
            Red. Office. 14/4 Corner, Atika Industrial Area, Banshidhar Chowk, Rajkot – Gujarat -360003
          </p>
          <p><strong>Marketing:</strong> +91 80000 77779 / +91 80000 14151</p>
          <p><strong>Quality Consultant:</strong> +91 80000 77779 / +91 80000 14151</p>
          <p><strong>For Sales Order:</strong> +91 80000 77779 / +91 80000 14151</p>
          <p><strong>Office:</strong> +91 80000 77779 / +91 80000 14151</p>
          <p><strong>Email:</strong> <a href="mailto:Kingagrochemicals@gmail.com">Kingagrochemicals@gmail.com</a></p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>
          © 2022 King Agro Chemicals All rights reserved. Managed by <span className="highlight">King Media</span>
        </p>
      </div>

      {/* Quick Enquiry Button */}
      <div className="quick-enquiry">Quick Enquiry</div>
    </footer>
  );
};

export default Footer;
