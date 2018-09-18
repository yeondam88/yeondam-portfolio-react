import React from "react";
import Emoji from "../shared/Emoji";
import img from "../../img/paper-plane.svg";

const Contact = () => {
  return (
    <React.Fragment>
      <section className="content">
        <div className="content__page-home">
          <h1>
            Hey, <Emoji symbol="😎" label="smile face" />
            <br />
            Let's talk !
          </h1>
        </div>
        <div className="content__image" />
      </section>
      <section className="form__area">
        <div className="form__area-heading">
          <h2 className="form__area-title">Send me a message</h2>
        </div>
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <label>Your Name: </label>
          <div className="input__bar">
            <div className="input__bar-field">
              <input className="form__area-input" type="text" name="name" />
            </div>
          </div>
          <label>Your Email: </label>
          <div className="input__bar">
            <div className="input__bar-field">
              <input className="form__area-input" type="email" name="email" />
            </div>
          </div>
          <label>Message: </label>
          <div className="input__bar">
            <div className="input__bar-field">
              <textarea className="form__area-input textfield" name="message" />
            </div>
          </div>
          <button className="btn" type="submit">
            Send
          </button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default Contact;
