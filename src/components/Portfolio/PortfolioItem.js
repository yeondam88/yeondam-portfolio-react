import React from "react";

const PortfolioItem = ({ src, alt, openPortfolio }) => {
  return (
    <div className="card" onClick={openPortfolio}>
      <a>
        <img src={src} alt={alt} />
      </a>
    </div>
  );
};

export default PortfolioItem;
