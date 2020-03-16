import React from "react";

const Footer = () => {
  return (
    <footer>
      <div id="contact" className="footer__social-container">
        <ul>
          <li>
            <a href="https://twitter.com/lloydpark88">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/lloyd0719">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yeondampark/">
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://github.com/yeondam88">
              <i className="fab fa-github" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__info">
        <p>
          Made with <i className="fas fa-heart" style={{ color: "#ED154E" }} />
        </p>
        <p className="name">© Yeondam Park</p>
      </div>
      <div className="bg" />
    </footer>
  );
};

export default Footer;
