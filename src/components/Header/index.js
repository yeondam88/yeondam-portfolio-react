import React, { Component } from "react";
import { Link } from "react-router-dom";
import posed from "react-pose";

const MobileMenu = posed.div({
  closed: { height: 0, transition: { duration: 50 } },
  open: {
    height: 300
  }
});

class Header extends Component {
  state = {
    isMenuClick: false
  };

  menuToggle = () => {
    this.setState({ isMenuClick: !this.state.isMenuClick });
  };

  render() {
    return (
      <header className="header__section">
        <nav className="nav">
          <Link to="/" style={{ textDecoration: "none", color: "#111720" }}>
            <div className="nav__logo">
              <div className="nav__logo-item">Y</div>
              <h1>Yeondam Park</h1>
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
            <li>
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
          <div className="nav__list-mobile" onClick={this.menuToggle} />
        </nav>

        <MobileMenu
          className="mobile__dropdown"
          pose={this.state.isMenuClick ? "open" : "closed"}
        >
          <ul className="mobile__dropdown-list">
            <li>
              <Link to="/" onClick={this.menuToggle}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={this.menuToggle}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={this.menuToggle}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/resume" onClick={this.menuToggle}>
                Resume
              </Link>
            </li>
          </ul>
        </MobileMenu>
      </header>
    );
  }
}

export default Header;
