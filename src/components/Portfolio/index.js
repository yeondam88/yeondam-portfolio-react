import React, { Component } from "react";
import Img from "react-image";
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

  renderGithubLink = link => {
    if (link === "" || link === undefined) {
      return null;
    }
    return (
      <a href={link} className="btn">
        Github
        <span>
          <i class="fab fa-github" />
        </span>
      </a>
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
              <Img
                src="http://mylamall.com/yeondam/portfolio-1.png"
                alt="portfolio"
              />
            </a>
          </div>
          <div
            className="card"
            onClick={this.openPortfolioDetail.bind(this, 2)}
          >
            <Img
              src="http://mylamall.com/yeondam/portfolio-2.png"
              alt="portfolio"
            />
          </div>
          <div
            className="card"
            onClick={this.openPortfolioDetail.bind(this, 3)}
          >
            <Img
              src="http://mylamall.com/yeondam/portfolio-3.png"
              alt="portfolio"
            />
          </div>
          <div
            className="card"
            onClick={this.openPortfolioDetail.bind(this, 4)}
          >
            <Img
              src="http://mylamall.com/yeondam/portfolio-4.png"
              alt="portfolio"
            />
          </div>
          <div
            className="card"
            onClick={this.openPortfolioDetail.bind(this, 5)}
          >
            <Img
              src="http://mylamall.com/yeondam/portfolio-5.png"
              alt="portfolio"
            />
          </div>
          <div
            className="card"
            onClick={this.openPortfolioDetail.bind(this, 6)}
          >
            <Img
              src="http://mylamall.com/yeondam/portfolio-6.png"
              alt="portfolio"
            />
          </div>
          <div
            className="card"
            onClick={this.openPortfolioDetail.bind(this, 7)}
          >
            <Img
              src="http://mylamall.com/yeondam/portfolio-7.png"
              alt="portfolio"
            />
          </div>
          <div
            className="card"
            onClick={this.openPortfolioDetail.bind(this, 8)}
          >
            <Img
              src="https://cdn.dribbble.com/users/1967053/screenshots/4612540/___1.png"
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
              <div className="btn-group">
                <a
                  href={this.state.activePortfolio.link}
                  className="btn"
                  target="_blank"
                >
                  See in action{" "}
                  <span>
                    <i className="fas fa-desktop" style={{ color: "white" }} />
                  </span>
                </a>
                {this.renderGithubLink(this.state.activePortfolio.githubLink)}
              </div>
            </div>
            <img src={this.state.activePortfolio.path} alt="portfolio" />
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
