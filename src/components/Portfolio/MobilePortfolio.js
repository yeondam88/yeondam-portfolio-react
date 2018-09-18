import React from "react";

const MobilePortfolio = ({ portfolios }) => {
  return (
    <div className="portfolio__detail-mobile">
      {portfolios.map(portfolio => {
        return (
          <div className="card" key={portfolio.id}>
            <img src={portfolio.path} alt="portfolio" />

            <div className="mobile__btn-wrapper">
              {" "}
              <a href={portfolio.link} className="btn">
                Go to page
              </a>{" "}
              <a href={portfolio.githubLink} className="btn">
                {" "}
                Github{" "}
              </a>{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MobilePortfolio;
