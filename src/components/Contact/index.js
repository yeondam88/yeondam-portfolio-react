import React from "react";
import Emoji from "../shared/Emoji";
import img from "../../img/paper-plane.svg";

const Contact = () => {
  return (
    <React.Fragment>
      <section className="content">
        <div className="content__about">
          <h1>
            Hey, <Emoji symbol="😎" label="smile face" />
            <br />
            Let's talk ! <br />
            Shoot me an email!
            <br />
          </h1>

          <form name="contact" method="POST" netlify>
            <p>
              <label>
                Your Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Your Role:{" "}
                <select name="role[]" multiple>
                  <option value="leader">Leader</option>
                  <option value="follower">Follower</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message" />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>

          <button className="btn">
            Say Hello{" "}
            <span>
              <img
                width="13px"
                height="14px"
                src={img}
                alt="paper plain icon"
              />
            </span>
          </button>
        </div>
        <div className="content__image">
          <img
            src="https://vijayverma.co/images/avatar-2.png"
            alt="Yeondam Park"
          />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
