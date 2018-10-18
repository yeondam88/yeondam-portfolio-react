import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import Emoji from "../shared/Emoji";
import resume from "../../img/lloyd_park_resume_v3.pdf";
import { Helmet } from "react-helmet";

class Resume extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber } = this.state;
    return (
      <React.Fragment>
        <Helmet>
          <title>Yeondam | Resume</title>
          <meta
            name="description"
            content="Front-End Developer based in Los Angeles. JavaScript enthusiast, with a passion for front end development."
          />
        </Helmet>
        <div className="resume__title">
          <h1>
            Resume
            <Emoji symbol="👻" />
          </h1>
        </div>
        <div className="resume__container">
          <Document
            file={resume}
            onLoadSuccess={this.onDocumentLoadSuccess}
            className="resume__area"
          >
            <Page
              pageNumber={pageNumber}
              width={1000}
              className="resume__page"
            />
          </Document>
        </div>
      </React.Fragment>
    );
  }
}

export default Resume;
