import React from "react";

const Skills = () => {
  return (
    <section class="skills">
      <h2 class="section__title">Skills</h2>
      <div id="skills" class="skills__info">
        <ul class="skills__info-list">
          <li class="skills__info-list--item">
            <h3>HTML 5</h3>
            <i class="fab fa-html5" />
          </li>
          <li class="skills__info-list--item">
            <h3>CSS 3</h3>
            <i class="fab fa-css3-alt" />
          </li>
          <li class="skills__info-list--item">
            <h3>JavaScript</h3>
            <i class="fab fa-js-square" />
          </li>
          <li class="skills__info-list--item">
            <h3>NodeJS</h3>
            <i class="fab fa-node-js" />
          </li>
        </ul>
        <ul class="skills__info-list">
          <li class="skills__info-list--item">
            <h3>Sass</h3>
            <i class="fab fa-sass" />
          </li>
          <li class="skills__info-list--item">
            <h3>React</h3>
            <i class="fab fa-react" />
          </li>
          <li class="skills__info-list--item">
            <h3>Git</h3>
            <i class="fab fa-github" />
          </li>
          <li class="skills__info-list--item">
            <h3>Python</h3>
            <i class="fab fa-python" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
