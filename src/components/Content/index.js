import React, { Component } from "react";
import img from "../../img/paper-plane.svg";

class Content extends Component {
  render() {
    return (
      <section className="content">
        <div className="content__about">
          <h1>
            I'm Yeondam Park
            <br />
            <strong className="tagline">a Front End Engineer</strong>
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
