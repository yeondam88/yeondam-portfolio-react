import React from "react";

const PortfolioDetail = ({
  isActive,
  closePortfolioDetail,
  closeIcon,
  activePortfolio,
  renderStacksList,
  renderGithubLink
}) => {
  return (
    <div className={`portfolio__detail ${isActive ? "open" : null}`}>
      <div onClick={closePortfolioDetail}>
        <img src={closeIcon} alt="close button" className="close" />
      </div>
      <div className="portfolio__detail-row">
        <div className="portfolio__detail-description">
          <h1>{activePortfolio.title}</h1>
          <p>{activePortfolio.description}</p>
          <hr />
          <p>Stacks</p>
          {renderStacksList(activePortfolio.stacks)}
          <div className="btn-group">
            <a href={activePortfolio.link} className="btn" target="_blank">
              See in action{" "}
              <span>
                <i className="fas fa-desktop" style={{ color: "white" }} />
              </span>
            </a>
            {renderGithubLink(activePortfolio.githubLink)}
          </div>
        </div>
        <img src={activePortfolio.path} alt="portfolio" />
      </div>
    </div>
  );
};

export default PortfolioDetail;
