import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header>
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="King Agro Chemicals" />
          </Link>
        </div>

        {/* Navigation Section */}
        <nav>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" className="active">Home</Link>
            <Link to="/about">About Us</Link>

            {/* Dropdown */}
            <div
              className="dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link to="/products">Products ▾</Link>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/products/ampulse">Ampulse Packing</Link>
                  <Link to="/products/insecticides">Insecticides</Link>
                  <Link to="/products/fungicides">Fungicides</Link>
                  <Link to="/products/pgr">PGR</Link>
                </div>
              )}
            </div>

            <Link to="/download">Download</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          {/* Hamburger Icon */}
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            &#9776;
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
