import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="King Agro Chemicals" />
          </Link>
        </div>

        {/* Navigation */}
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
              <Link>Products ▾</Link>
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

          {/* Hamburger */}
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            &#9776;
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
