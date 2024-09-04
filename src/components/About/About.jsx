import s from "./About.module.css";

const About = () => {
  return (
    <div>
      <section className={s.section}>
        <h2>About Me</h2>
        <p className={s.specialDescription}>
          I&#39;m Mykola Putyata, a passionate Fullstack Developer based in
          Kyiv, Ukraine. With a solid foundation in JavaScript, React, and
          Node.js, I enjoy building both frontend and backend solutions that are
          not only functional but also user-friendly.
        </p>
        <h4>My Journey</h4>
        <p className={s.specialDescription}>
          I started my journey in web development with a deep curiosity about
          how websites and web applications work. Over time, this curiosity grew
          into a passion, leading me to learn and master various technologies in
          the field. My academic background in law provided me with strong
          analytical skills, which I now apply to problem-solving in
          programming.
        </p>
        <h4>Skills and Expertise</h4>
        <p className={s.specialDescription}>
          My skill set includes:
          <br />
          - Frontend: I have experience with HTML5, CSS/SCSS, and JavaScript,
          with a focus on React for building dynamic user interfaces. I enjoy
          using libraries like Redux and Material-UI to enhance the
          functionality and aesthetics of applications. <br />- Backend: On the
          server side, I work with Node.js. I am familiar with databases such as
          MongoDB and PostgreSQL and have experience with RESTful services.
          <br />- Fullstack Development: I thrive in environments where I can
          work on both frontend and backend, ensuring that projects are cohesive
          and well-integrated.
        </p>
        <h4>My Philosophy</h4>
        <p className={s.specialDescription}>
          I believe in writing clean, maintainable code and am always eager to
          learn new technologies and best practices. Collaboration and
          continuous improvement are at the heart of my work ethic, and I am
          committed to delivering high-quality solutions.
        </p>
        <h4>Goals and Aspirations</h4>
        <p className={s.specialDescription}>
          Looking ahead, I aim to deepen my knowledge in fullstack development
          and explore new technologies in the field. My goal is to contribute to
          innovative projects that make a positive impact and to grow as a
          developer through continuous learning and real-world experience.
        </p>
        <h4>Personal Interests</h4>
        <p className={s.specialDescription}>
          When I&#39;m not coding, I go to GYM, explore new places, and engage
          in community events related to technology and innovation. I am also
          fluent in Ukrainian, and Russian, which helps me connect with a
          diverse range of people and cultures.
        </p>
      </section>
    </div>
  );
};

export default About;
