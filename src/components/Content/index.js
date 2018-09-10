import React, { Component } from "react";
import img from "../../img/paper-plane.svg";

const texts = ["a Front End Engineer", "a JavaScript Lover"];

class Content extends Component {
  state = {
    textIdx: 0
  };

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = texts[this.state.textIdx % texts.length];

    return (
      <section className="content">
        <div className="content__about">
          <h1>
            I'm Yeondam Park
            <br />
            <strong className="tagline">{textThatChanges}</strong>
          </h1>
          <p>
            Love to building a beautiful things with <strong>JavaScript</strong>
          </p>
          <button className="btn">
            Say Hello{" "}
            <span>
              <img
                width="13px"
                height="14px"
                src={img}
                alt="paper plain icon"
              />
            </span>
          </button>
        </div>
        <div className="content__image">
          <img
            src="https://vijayverma.co/images/avatar-2.png"
            alt="Yeondam Park"
          />
        </div>
      </section>
    );
  }
}

export default Content;
