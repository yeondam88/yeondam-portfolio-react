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
                src="https://cdn.dribbble.com/users/25686/screenshots/5140212/dribbble.jpg"
                alt="portfolio"
              />
            </a>
          </div>
          <div
            className="card"
            onClick={this.openPortfolioDetail.bind(this, 2)}
          >
            <img
              src="https://cdn.dribbble.com/users/44585/screenshots/5140880/wolverine-dribbble.png"
              alt="portfolio"
            />
          </div>
          <div
            className="card"
            onClick={this.openPortfolioDetail.bind(this, 3)}
          >
            <img
              src="https://cdn.dribbble.com/users/44585/screenshots/4959706/iron-man-dribbble.png"
              alt="portfolio"
            />
          </div>
          <div
            className="card"
            onClick={this.openPortfolioDetail.bind(this, 4)}
          >
            <img
              src="https://cdn.dribbble.com/users/44585/screenshots/5021576/thor.png"
              alt="portfolio"
            />
          </div>
          <div
            className="card"
            onClick={this.openPortfolioDetail.bind(this, 5)}
          >
            <img
              src="https://cdn.dribbble.com/users/25686/screenshots/4810050/dribbble.jpg"
              alt="portfolio"
            />
          </div>
          <div
            className="card"
            onClick={this.openPortfolioDetail.bind(this, 6)}
          >
            <img
              src="https://cdn.dribbble.com/users/1205252/screenshots/4853796/catrinas.png"
              alt="portfolio"
            />
          </div>
          <div
            className="card"
            onClick={this.openPortfolioDetail.bind(this, 7)}
          >
            <img
              src="https://cdn.dribbble.com/users/1205252/screenshots/4845230/erkaeva-shop.png"
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
            </div>
            <img src={this.state.activePortfolio.path} alt="portfolio" />
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
