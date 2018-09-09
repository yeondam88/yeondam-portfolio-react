import React from "react";

const Footer = () => {
  return (
    <footer>
      <div id="contact" class="footer__social-container">
        <ul>
          <li>
            <a href="https://twitter.com/lloydpark88">
              <i class="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/lloyd0719">
              <i class="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yeondampark/">
              <i class="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://github.com/yeondam88">
              <i class="fab fa-github" />
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__info">
        <p>
          Made with <i className="fas fa-heart" style={{ color: "#ED154E" }} />
        </p>
        <p>© Yeondam Park</p>
      </div>
      <div class="bg" />
    </footer>
  );
};

export default Footer;
