import React from "react";
import Fade from "react-reveal/Fade";
import Content from "../Content";
import Skills from "../Skills";
import Portfolio from "../Portfolio";

const Home = () => {
  return (
    <React.Fragment>
      <Fade>
        <Content />
      </Fade>
      <Fade delay={1000}>
        <Portfolio />
      </Fade>
      <Skills />
    </React.Fragment>
  );
};

export default Home;
