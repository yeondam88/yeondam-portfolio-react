import React, { Component } from "react";
import Typed from "typed.js";

class TypedText extends Component {
  componentDidMount() {
    const { strings } = this.props;
    const options = {
      strings,
      startDelay: 500,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      onComplete: self => {
        self.startDelay = 0;
      }
    };

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <span
        ref={el => {
          this.el = el;
        }}
      />
    );
  }
}

export default TypedText;
