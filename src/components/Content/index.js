import React, { Component } from "react";
import img from "../../img/paper-plane.svg";
import posed from "react-pose";
import TypedText from "./Typed";

const Text = posed.strong({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

class Content extends Component {
  state = {
    textIdx: 0,
    isVisible: true
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 3000);
  }

  render() {
    const { isVisible } = this.state;
    return (
      <section className="content">
        <div className="content__page-home">
          <h1>
            I'm Yeondam Park
            <br />
            <TypedText
              strings={[
                "Front-End Engineer.",
                "JavaScript Enthusiast.",
                "Fullstack Engineer."
              ]}
            />
          </h1>
          <p>
            Love to building a beautiful things with <strong>JavaScript</strong>
          </p>
          <a href="mailto:lloyd.park88@gmail.com">
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
          </a>
        </div>
        <div className="content__image" />
      </section>
    );
  }
}

export default Content;
