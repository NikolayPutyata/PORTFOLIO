import s from "./Skills.module.css";

const Skills = () => {
  return (
    <section className={s.section} id="skills">
      <h2>Skills</h2>
      <div className={s.skill}>
        <h3>Hard Skills</h3>
        <ul className={s.skillsUl}>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Node.js</li>
          <li>REST API</li>
          <li>UI Optimization</li>
        </ul>
      </div>
      <div className={s.skill}>
        <h3>Soft Skills</h3>
        <ul className={s.skillsUl}>
          <li>Strong communication</li>
          <li>Teamwork</li>
          <li>Problem-solving abilities</li>
          <li>Time management</li>
        </ul>
      </div>
      <div className={s.skill}>
        <h3>Other Skills</h3>
        <ul>
          <li>
            <strong>Git:</strong> Experience with version control for managing
            code and collaborating in teams.
          </li>
          <li>
            <strong>GitHub Pages:</strong> Skills in using GitHub Pages for
            hosting and publishing web projects.
          </li>
          <li>
            <strong>Figma:</strong> Proficiency in using Figma for interface
            design and prototyping.
          </li>
          <li>
            <strong>Libraries:</strong> Experience working with JavaScript and
            CSS libraries to enhance functionality and design of web
            applications.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
