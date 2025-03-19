import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import logo from '../assets/images/logo.png';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Open dropdown on click
  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Open dropdown on hover
  const handleDropdownHover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close dropdown
  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

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

            {/* Dropdown using MUI */}
            
              <Link
                onClick={handleDropdownClick}
                aria-controls="products-menu"
                aria-haspopup="true"
              >
                Products ▾
              </Link>
              <Menu
                id="products-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleDropdownClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                  onMouseLeave: handleDropdownClose, // Close on mouse leave
                }}
              >
                <MenuItem onClick={handleDropdownClose} component={Link} to="/products/ampulse">
                  Ampulse Packing
                </MenuItem>
                <MenuItem onClick={handleDropdownClose} component={Link} to="/products/insecticides">
                  Insecticides
                </MenuItem>
                <MenuItem onClick={handleDropdownClose} component={Link} to="/products/fungicides">
                  Fungicides
                </MenuItem>
                <MenuItem onClick={handleDropdownClose} component={Link} to="/products/pgr">
                  PGR
                </MenuItem>
              </Menu>

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
