import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import Emoji from "../shared/Emoji";
import resume from "../../img/lloyd_park_resume.pdf";

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
