import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
