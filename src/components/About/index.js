import React, { Component } from 'react';
import Emoji from '../shared/Emoji';
import Fade from 'react-reveal/Fade';
import SplitText from 'react-pose-text';
import { Helmet } from 'react-helmet';

import profileImg from '../../img/yeondampark_head.svg';

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: 1000
  }
};

class About extends Component {
  render() {
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
                <SplitText
                  initialPose="exit"
                  pose="enter"
                  charPoses={charPoses}
                >
                  Lloyd Park
                </SplitText>
                <br />
              </h1>

              <p className="content__page-about--description">
                Passionate and motivated Front End Developer with 3+ years of
                experience working in eCommerce and marketing industries in
                Front End Developer role. <br />
                <br /> Skilled React/JavaScript developer and vast knowledge of
                object-oriented software engineering concepts. <br />
                Solid understanding of React andJavaScript(ES6+).
                <br />
                <br />
                My favorite and primary programming language is{' '}
                <span className="text-bg" style={{ position: 'relative' }}>
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
              <div className="card">
                <img
                  height="30px"
                  src="https://image.brightpoint.net/brightpoint.svg"
                  alt="BrightPoint Captial"
                />
                <div className="about__container-item">
                  <h1>
                    BrightPoint Capital{' '}
                    <span className="about__container-item--link">
                      <a
                        href="https://brightpoint.net"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-external-link-alt" />
                      </a>
                    </span>
                  </h1>
                  <p>2019 - Present</p>
                  <p>Software Engineer</p>
                  <i className="fal fa-browser" />
                </div>
              </div>
              <div className="card">
                <img
                  height="30px"
                  src="https://cdn.shopify.com/s/files/1/1270/3733/files/NEW_VRS_LOGO_x20@2x.png?v=1516905986"
                  alt="vrs logo"
                />
                <div className="about__container-item">
                  <h1>
                    VRS Design{' '}
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
                  <p>2016 - 2019</p>
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
                    KW International{' '}
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
                  <p>IT associate / Warehouse Supervisor</p>
                </div>
              </div>
            </div>
          </section>
        </Fade>
      </React.Fragment>
    );
  }
}

export default About;
