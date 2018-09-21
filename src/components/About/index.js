import React, { Component } from "react";
import Emoji from "../shared/Emoji";
import SplitText from "react-pose-text";

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30
  }
};

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="content">
          <div className="content__page-about">
            <h1>
              Hi, <Emoji symbol="👋" label="hello" />
              <br />
              My name is <br />
              <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                Yeondam Park
              </SplitText>
              <br />
            </h1>

            <p className="content__page-about--description">
              I' m Self-taught Front End Engineer. <br />
              My passion is to
              <br />
              build a beautiful things with the modern technologies.
              <br />
              <br />
              My favorite and primary programming language is{" "}
              <span className="text-bg" style={{ position: "relative" }}>
                JavaScript
              </span>
              . I like to do mostly the Front-End, but with Node I do the
              backend programming as well.
            </p>
          </div>
          <div className="content__image" />
        </section>
        <section className="about">
          <h2 className="section__title">
            <strong>Experiences</strong>
          </h2>
          <div className="about__container">
            <div className="card">
              <img
                height="30px"
                src="https://cdn.shopify.com/s/files/1/1270/3733/files/NEW_VRS_LOGO_x20@2x.png?v=1516905986"
                alt="vrs logo"
              />
              <div className="about__container-item">
                <h1>
                  VRS Design{" "}
                  <span className="about__container-item--link">
                    <a
                      href="https://vrsdesign.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt" />
                    </a>
                  </span>
                </h1>
                <p>2016 - Present</p>
                <p>Front End Developer</p>
                <i className="fal fa-browser" />
              </div>
            </div>
            <div className="card">
              <img
                height="50px"
                src="http://www.kwinternational.com/img/kw-logo.png"
                alt="kw logo"
              />
              <div className="about__container-item">
                <h1>
                  KW International{" "}
                  <span className="about__container-item--link">
                    <a
                      href="http://www.kwinternational.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt" />
                    </a>
                  </span>
                </h1>
                <p>2015 - 2016</p>
                <p>IT associate / Supervisor</p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
