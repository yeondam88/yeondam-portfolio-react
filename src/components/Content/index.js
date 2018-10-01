import React, { Component } from "react";
import img from "../../img/paper-plane.svg";
import TypedText from "./Typed";

import profileImg from "../../img/yeondampark_head.svg";

class Content extends Component {
  render() {
    return (
      <section className="content">
        <div className="content__page-home">
          <h1>
            I'm Lloyd Park
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
            Hi, my name is Lloyd(Yeondam) Park <br />
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
        <div className="content__image">
          <img src={profileImg} alt="Yeondam Park Profile" height={354} />
        </div>
      </section>
    );
  }
}

export default Content;
