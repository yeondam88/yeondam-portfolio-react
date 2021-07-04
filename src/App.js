import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Helmet>
            <html lang="en" />
            <title>Yeondam Park — Front-End Developer</title>
            <meta
              name="description"
              content="Front-End Developer based in Los Angeles. JavaScript enthusiast, with a passion for front end development."
            />
            <meta name="referrer" content="origin" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://yeondampark.com" />
            <meta property="og:title" content="Yeondam Park — Front-End Developer" />
            <meta property="og:description" content="Personal website for Yeondam Park. Front-End Developer and passionate web enthuiast." />
            <meta property="og:image" content="https://res.cloudinary.com/yeondam88/image/upload/v1537672891/portfolio_8.jpg" />
          </Helmet>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
