import React from "react";
import Emoji from "../shared/Emoji";
import Fade from "react-reveal/Fade";
import SplitText from "react-pose-text";
import { Helmet } from "react-helmet";

import profileImg from "../../img/yeondampark_head.svg";
import os_logo from "../../img/os_main_logo_v2.svg";
import bp_logo from "../../img/bpc_logo.svg";
import vrs_logo from "../../img/vrs_logo.png";
import kw_logo from "../../img/kw-logo.png";

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: 1000
  }
};

const career_data = [
  {
    name: "OrangeShine",
    url: "https://orangeshine.com",
    logoUrl: os_logo,
    title: "Software Engineer",
    fromTo: "2020 - Present"
  },
  {
    name: "BrightPoint Capital",
    url: "https://brightpoint.net",
    logoUrl: bp_logo,
    title: "Software Engineer",
    fromTo: "2019 - 2020"
  },
  {
    name: "VRS Design",
    url: "https://vrsdesign.com",
    logoUrl: vrs_logo,
    title: "Front End Engineer",
    fromTo: "2016 - 2019"
  },
  {
    name: "KW International",
    url: "http://www.kwinternational.com/",
    logoUrl: kw_logo,
    title: "IT associate",
    fromTo: "2015 - 2016"
  }
];

function renderCard({ name, url, logoUrl, title, fromTo }) {
  console.log(typeof logoUrl);
  return (
    <div className="card">
      <img height="30px" src={logoUrl} alt={name} />
      <div className="about__container-item">
        <h1>
          {name}{" "}
          <span className="about__container-item--link">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt" />
            </a>
          </span>
        </h1>
        <p>{fromTo}</p>
        <p>{title}</p>
        <i className="fal fa-browser" />
      </div>
    </div>
  );
}

const About = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Yeondam | About</title>
        <meta
          name="description"
          content="Front-End Developer based in Los Angeles. JavaScript enthusiast, with a passion for front end development."
        />
      </Helmet>
      <Fade delay={500}>
        <section className="content">
          <div className="content__page-about">
            <h1>
              Hi, <Emoji symbol="👋" label="hello" />
              <br />
              My name is <br />
              <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                Lloyd Park
              </SplitText>
              <br />
            </h1>

            <p className="content__page-about--description">
              Passionate and motivated Front End Developer with 3+ years of
              experience working in eCommerce and marketing industries in Front
              End Developer role. <br />
              <br /> Skilled React/JavaScript developer and vast knowledge of
              object-oriented software engineering concepts. <br />
              Solid understanding of React andJavaScript(ES6+).
              <br />
              <br />
              My favorite and primary programming language is{" "}
              <span className="text-bg" style={{ position: "relative" }}>
                JavaScript
              </span>
              . When I am not coding I love listening to music and djing.
            </p>
          </div>
          <div className="content__image">
            <img src={profileImg} alt="Yeondam Park Profile" height={354} />
          </div>
        </section>
        <section className="about">
          <h2 className="section__title">
            <strong>Experiences</strong>
          </h2>
          <div className="about__container">
            {career_data.map(career => renderCard(career))}
          </div>
        </section>
      </Fade>
    </React.Fragment>
  );
};

export default About;
