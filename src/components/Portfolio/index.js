import React, { Component } from "react";
import { portfolioData } from "../../data";

class Portfolio extends Component {
  state = {
    isActive: false,
    portfolios: portfolioData,
    activePortfolio: {}
  };

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

  render() {
    return (
      <section className="portfolio">
        <h2 id="portfolio" className="section__title">
          <strong>Portfolio</strong>
        </h2>
        <div className="portfolio__container">
          <div
            className="card"
            onClick={this.openPortfolioDetail.bind(this, 1)}
          >
            <a>
              <img
                data-id="1"
                src="http://mylamall.com/yeondam/portfolio-1.png"
                alt="portfolio"
              />
            </a>
          </div>
          <div
            className="card"
            onClick={this.openPortfolioDetail.bind(this, 2)}
          >
            <img
              src="http://mylamall.com/yeondam/portfolio-2.png"
              alt="portfolio"
            />
          </div>
          <div
            className="card"
            onClick={this.openPortfolioDetail.bind(this, 3)}
          >
            <img
              src="http://mylamall.com/yeondam/portfolio-3.png"
              alt="portfolio"
            />
          </div>
          <div
            className="card"
            onClick={this.openPortfolioDetail.bind(this, 4)}
          >
            <img
              src="http://mylamall.com/yeondam/portfolio-4.png"
              alt="portfolio"
            />
          </div>
          <div
            className="card"
            onClick={this.openPortfolioDetail.bind(this, 5)}
          >
            <img
              src="http://mylamall.com/yeondam/portfolio-5.png"
              alt="portfolio"
            />
          </div>
          <div
            className="card"
            onClick={this.openPortfolioDetail.bind(this, 6)}
          >
            <img
              src="http://mylamall.com/yeondam/portfolio-6.png"
              alt="portfolio"
            />
          </div>
          <div
            className="card"
            onClick={this.openPortfolioDetail.bind(this, 7)}
          >
            <img
              src="http://mylamall.com/yeondam/portfolio-7.png"
              alt="portfolio"
            />
          </div>
          <div
            className="card"
            onClick={this.openPortfolioDetail.bind(this, 8)}
          >
            <img
              src="https://cdn.dribbble.com/users/44585/screenshots/4926663/bug-lab-bee-ig.jpg.png"
              alt="portfolio"
            />
          </div>
        </div>
        <div
          className={`portfolio__detail ${this.state.isActive ? "open" : null}`}
        >
          <div onClick={this.closePortfolioDetail}>
            <i className="close fas fa-times" />
          </div>
          <div className="portfolio__detail-row">
            <div className="portfolio__detail-description">
              <h1>{this.state.activePortfolio.title}</h1>
              <p>{this.state.activePortfolio.description}</p>
              <hr />
              <p>Stacks</p>
              {this.renderStacksList(this.state.activePortfolio.stacks)}
              <a
                href={this.state.activePortfolio.link}
                className="btn"
                style={{ width: "100%" }}
                target="_blank"
              >
                See in action{" "}
                <span>
                  <i className="fas fa-desktop" style={{ color: "white" }} />
                </span>
              </a>
            </div>
            <img src={this.state.activePortfolio.path} alt="portfolio" />
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
