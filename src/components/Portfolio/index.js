import React, { Component } from "react";
import { portfolioData } from "../../data";
import PortfolioItem from "./PortfolioItem";
import MobilePorfolio from "./MobilePortfolio";
import closeIcon from "../../img/close.svg";
import PortfolioDetail from "./PortfolioDetail";

class Portfolio extends Component {
  state = {
    isActive: false,
    portfolios: portfolioData,
    activePortfolio: {}
  };

  componentDidMount() {
    const body = document.querySelector("body");
    body.addEventListener("click", this.closePortfolioDetail);
    console.log("body clicked!");
  }

  componentWillUnmount() {
    const body = document.querySelector("body");
    body.removeEventListener("click", this.closePortfolioDetail);
    console.log("event removed!!");
  }

  openPortfolioDetail = (id, e) => {
    this.setState({ isActive: true });
    this.getActivePortfolio(id);
  };

  closePortfolioDetail = () => {
    this.setState({
      isActive: false
    });
  };

  getActivePortfolio = id => {
    const activePortfolio = this.state.portfolios.find(portfolio => {
      return portfolio.id === id;
    });

    this.setState(
      {
        activePortfolio
      },
      () => console.log(this.state.activePortfolio)
    );
  };

  renderStacksList = stacks => {
    if (stacks === undefined || stacks.length === 0) {
      return null;
    }
    return (
      <ul className="portfolio__detail-stacks">
        {stacks.map((stack, index) => {
          return (
            <li className="portfolio__detail-stacks--item" key={index}>
              {stack}
            </li>
          );
        })}
      </ul>
    );
  };

  renderGithubLink = link => {
    if (link === "" || link === undefined) {
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

  render() {
    const { isActive, activePortfolio, portfolios } = this.state;
    return (
      <section className="portfolio">
        <h2 id="portfolio" className="section__title">
          <strong>Portfolio</strong>
        </h2>
        <div className="portfolio__container">
          <PortfolioItem
            openPortfolio={this.openPortfolioDetail.bind(this, 1)}
            src={"http://mylamall.com/yeondam/portfolio-1.png"}
            alt="airbnb style react app"
          />
          <PortfolioItem
            openPortfolio={this.openPortfolioDetail.bind(this, 2)}
            src={"http://mylamall.com/yeondam/portfolio-2.png"}
            alt="airbnb style react app"
          />
          <PortfolioItem
            openPortfolio={this.openPortfolioDetail.bind(this, 3)}
            src={"http://mylamall.com/yeondam/portfolio-3.png"}
            alt="airbnb style react app"
          />
          <PortfolioItem
            openPortfolio={this.openPortfolioDetail.bind(this, 4)}
            src={"http://mylamall.com/yeondam/portfolio-4.png"}
            alt="airbnb style react app"
          />
          <PortfolioItem
            openPortfolio={this.openPortfolioDetail.bind(this, 5)}
            src={"http://mylamall.com/yeondam/portfolio-5.png"}
            alt="airbnb style react app"
          />
          <PortfolioItem
            openPortfolio={this.openPortfolioDetail.bind(this, 6)}
            src={"http://mylamall.com/yeondam/portfolio-6.png"}
            alt="airbnb style react app"
          />
          <PortfolioItem
            openPortfolio={this.openPortfolioDetail.bind(this, 7)}
            src={"http://mylamall.com/yeondam/portfolio-7.png"}
            alt="airbnb style react app"
          />
        </div>
        <PortfolioDetail
          isActive={isActive}
          activePortfolio={activePortfolio}
          closeIcon={closeIcon}
          closePortfolioDetail={this.closePortfolioDetail}
          renderGithubLink={this.renderGithubLink}
          renderStacksList={this.renderStacksList}
        />
        <MobilePorfolio portfolios={portfolios} />
      </section>
    );
  }
}

export default Portfolio;
