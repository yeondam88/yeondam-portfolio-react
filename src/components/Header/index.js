import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import posed from 'react-pose';

const MobileMenu = posed.div({
  closed: { height: 0, transition: { duration: 50 } },
  open: {
    height: 300
  }
});

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header__section">
      <nav className="nav">
        <Link to="/" style={{ textDecoration: 'none', color: '#111720' }}>
          <div className="nav__logo">
            <div className="nav__logo-item">Y</div>
            <h1>Lloyd Park</h1>
          </div>
        </Link>
        <ul className="nav__list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="nav__list-mobile" onClick={menuToggle} />
      </nav>

      <MobileMenu
        className="mobile__dropdown"
        pose={isMenuOpen ? 'open' : 'closed'}
      >
        <ul className="mobile__dropdown-list">
          <li>
            <Link to="/" onClick={menuToggle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={menuToggle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={menuToggle}>
              Contact
            </Link>
          </li>
        </ul>
      </MobileMenu>
    </header>
  );
}

export default Header;
