import React, { Component } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Content />
        <Portfolio />
        <Skills />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
