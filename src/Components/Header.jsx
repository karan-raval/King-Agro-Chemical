import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';  // ✅ useLocation Import Kiya
import { Menu, MenuItem } from '@mui/material';
import logo from '../assets/images/logo.png';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();  // ✅ Current Page Path Get Karne Ke Liye

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
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About Us
            </Link>

            {/* Dropdown using MUI */}
            <Link
              onClick={handleDropdownClick}
              aria-controls="products-menu"
              aria-haspopup="true"
              className={location.pathname.includes('/products') ? 'active' : ''} // ✅ Products active if any product is opened
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

            <Link
  to="#"
  className={location.pathname === '/download' ? 'active' : ''}
  onClick={() => {
    const pdfUrl = '../assets/Broucher/King Agro Chemicals_Rajkot_ Broucher.pdf'; // 📂 Public folder me PDF ka path
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'King Agro Chemicals_Rajkot_ Broucher'; // 📥 Custom file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // PDF ko new tab me open karne ke liye
    window.open(pdfUrl, '_blank');
  }}
>
  Download
</Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contact Us
            </Link>
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
