import React, { Component } from "react";
import img from "../../img/paper-plane.svg";
import TypedText from "./Typed";

class Content extends Component {
  render() {
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
