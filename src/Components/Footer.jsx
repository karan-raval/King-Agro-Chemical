import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Adjust the path to your logo
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
    <footer>
      <div className="footer-container">
        {/* Left Section - Logo and Info */}
        <div className="footer-logo-section">
          <img src={logo} alt="Tyrone Agro Chemicals" className="footer-logo" />
          <p className="footer-tagline">
            <b> Manufacturer of </b> <br /> <span className="highlight">Pesticides, BioPesticides & PGR</span>
          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/kingofagro?rdid=mtbneojk0Tk2DOcv&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ACmXHRpsP%2F#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/king_agro_chemicals?igsh=MWxnY3lmMnh2emV2NQ==" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/+918000014151"><i className="fab fa-whatsapp"></i></a>
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
    </footer>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>
          © {currentYear} King Agro Chemicals All rights reserved. Managed by <span className="highlight">King Media</span>
        </p>
      </div>

      {/* Quick Enquiry Button */}
      {/* <div className="quick-enquiry">Quick Enquiry</div> */}
    </>
  );
};

export default Footer;
