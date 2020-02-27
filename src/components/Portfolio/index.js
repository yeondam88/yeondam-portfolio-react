import React, { useState, useCallback, useEffect } from 'react';
import { portfolioData } from '../../data';
import PortfolioItem from './PortfolioItem';
import MobilePorfolio from './MobilePortfolio';
import closeIcon from '../../img/close.svg';
import PortfolioDetail from './PortfolioDetail';

import { useEventListener } from '../../hooks/useEventListener';

function Portfolio() {
  const [isActive, setIsActive] = useState(false);
  const [portfolios, setPortfolios] = useState(portfolioData);
  const [activePortfolio, setActivePortfolio] = useState({});
  const body = document.querySelector('body');

  const handler = useCallback(
    event => {
      setIsActive(false);
    },
    [isActive]
  );

  useEventListener('click', handler, body);

  const openPortfolioDetail = (id, e) => {
    setIsActive(true);
    getActivePortfolio(id);
  };

  const closePortfolioDetail = () => {
    setIsActive(false);
  };

  const getActivePortfolio = id => {
    const activePortfolio = portfolios.find(portfolio => {
      return portfolio.id === id;
    });
    setActivePortfolio(activePortfolio);
  };

  const renderStacksList = stacks => {
    if (stacks === undefined || stacks.length === 0) {
      return null;
    }
    return (
      <ul className="portfolio__detail-stacks tags">
        {stacks.map((stack, index) => {
          return (
            <li className="portfolio__detail-stacks--item tag" key={index}>
              {stack}
            </li>
          );
        })}
      </ul>
    );
  };

  const renderGithubLink = link => {
    if (link === '' || link === undefined) {
      return null;
    }
    return (
      <a href={link} className="btn">
        Github
        <span>
          <i className="fab fa-github" />
        </span>
      </a>
    );
  };

  return (
    <section className="portfolio">
      <h2 id="portfolio" className="section__title">
        <strong>Portfolio</strong>
      </h2>
      <div className="portfolio__container">
        <PortfolioItem
          openPortfolio={() => openPortfolioDetail(1)}
          src={require('../../img/portfolio_1.png')}
          alt="airbnb style react app"
        />
        <PortfolioItem
          openPortfolio={() => openPortfolioDetail(2)}
          src={require('../../img/portfolio_2.png')}
          alt="Social network app with React/Redux"
        />
        <PortfolioItem
          openPortfolio={() => openPortfolioDetail(3)}
          src={require('../../img/portfolio_3.png')}
          alt="VRS Design official site"
        />
        <PortfolioItem
          openPortfolio={() => openPortfolioDetail(4)}
          src={require('../../img/portfolio_4.jpg')}
          alt="MovieMatch built with React"
        />
        <PortfolioItem
          openPortfolio={() => openPortfolioDetail(5)}
          src={require('../../img/portfolio_5.jpg')}
          alt="Lyric search app with React"
        />
        <PortfolioItem
          openPortfolio={() => openPortfolioDetail(6)}
          src={require('../../img/portfolio_6.jpg')}
          alt="Reddit search app with Vanilla JS"
        />
        <PortfolioItem
          openPortfolio={() => openPortfolioDetail(7)}
          src={require('../../img/portfolio_7.jpg')}
          alt="Expense record app with React"
        />
        <PortfolioItem
          openPortfolio={() => openPortfolioDetail(8)}
          src={require('../../img/portfolio_8.png')}
          alt="Yeondam Park(Lloyd) portfolio app with React"
        />
      </div>
      <PortfolioDetail
        isActive={isActive}
        activePortfolio={activePortfolio}
        closeIcon={closeIcon}
        closePortfolioDetail={closePortfolioDetail}
        renderGithubLink={renderGithubLink}
        renderStacksList={renderStacksList}
      />
      <MobilePorfolio portfolios={portfolios} />
    </section>
  );
}

export default Portfolio;
