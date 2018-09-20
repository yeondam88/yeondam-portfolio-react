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
            src={require("../../img/portfolio_1.jpg")}
            alt="airbnb style react app"
          />
          <PortfolioItem
            openPortfolio={this.openPortfolioDetail.bind(this, 2)}
            src={require("../../img/portfolio_2.jpg")}
            alt="airbnb style react app"
          />
          <PortfolioItem
            openPortfolio={this.openPortfolioDetail.bind(this, 3)}
            src={require("../../img/portfolio_3.jpg")}
            alt="airbnb style react app"
          />
          <PortfolioItem
            openPortfolio={this.openPortfolioDetail.bind(this, 4)}
            src={require("../../img/portfolio_4.jpg")}
            alt="airbnb style react app"
          />
          <PortfolioItem
            openPortfolio={this.openPortfolioDetail.bind(this, 5)}
            src={require("../../img/portfolio_5.jpg")}
            alt="airbnb style react app"
          />
          <PortfolioItem
            openPortfolio={this.openPortfolioDetail.bind(this, 6)}
            src={require("../../img/portfolio_6.jpg")}
            alt="airbnb style react app"
          />
          <PortfolioItem
            openPortfolio={this.openPortfolioDetail.bind(this, 7)}
            src={require("../../img/portfolio_7.jpg")}
            alt="airbnb style react app"
          />
          <PortfolioItem
            openPortfolio={this.openPortfolioDetail.bind(this, 8)}
            src={require("../../img/portfolio_8.jpg")}
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
