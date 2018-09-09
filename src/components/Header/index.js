import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header__section">
        <nav className="nav">
          <div className="nav__logo">
            <div className="nav__logo-item">Y</div>
            <h1>Yeondam Park</h1>
          </div>
          <ul className="nav__list">
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#skills">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
