import React from "react";

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="section__title">Skills</h2>
      <div id="skills" className="skills__info">
        <div className="skills__info-list">
          <div className="skills__info-list--item">
            <h3>HTML 5</h3>
            <i className="fab fa-html5" />
          </div>
          <div className="skills__info-list--item">
            <h3>CSS 3</h3>
            <i className="fab fa-css3-alt" />
          </div>
          <div className="skills__info-list--item">
            <h3>JavaScript</h3>
            <i className="fab fa-js-square" />
          </div>
          <div className="skills__info-list--item">
            <h3>NodeJS</h3>
            <i className="fab fa-node-js" />
          </div>
        </div>
        <div className="skills__info-list">
          <div className="skills__info-list--item">
            <h3>Sass</h3>
            <i className="fab fa-sass" />
          </div>
          <div className="skills__info-list--item">
            <h3>React</h3>
            <i className="fab fa-react" />
          </div>
          <div className="skills__info-list--item">
            <h3>Git</h3>
            <i className="fab fa-github" />
          </div>
          <div className="skills__info-list--item">
            <h3>Python</h3>
            <i className="fab fa-python" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
