import s from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={`${s.section}`} id="projects">
      <h2>Projects</h2>
      <div className={s.project}>
        <h3>
          <a
            href="https://tor10s.github.io/script-masters/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developer&#39;s Portfolio
          </a>
        </h3>
        <p>
          - Project Role: Contributed to the project by developing the Reviews
          section, focusing on ensuring a user-friendly interface, responsive
          design, and integrating dynamic content to enhance user engagement.
        </p>
        <p>
          - Technologies Used: HTML, CSS, JavaScript, Vite, GitHub Pages, REST
          API, Figma. Libraries: Axios, Swiper, iziToast.
        </p>
        <p>
          <a
            href="https://github.com/TOR10S/script-masters"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </a>
        </p>
      </div>
      <div className={s.project}>
        <h3>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Project Name
          </a>
        </h3>
        <p>description</p>
      </div>
      <div className={s.project}>
        <h3>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Project Name
          </a>
        </h3>
        <p>description</p>
      </div>
    </section>
  );
};

export default Projects;
