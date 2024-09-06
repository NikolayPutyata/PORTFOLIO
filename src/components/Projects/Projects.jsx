import s from "./Projects.module.css";
import ProjectsItem from "./ProjectsItem";

const Projects = () => {
  return (
    <section className={s.section} id="projects">
      <h2>Projects</h2>
      <ProjectsItem
        title="Developer's Portfolio"
        description="Project Role: Contributed to the project by developing the Reviews section, focusing on ensuring a user-friendly interface, responsive design, and integrating dynamic content to enhance user engagement."
        techList="Technologies Used: HTML, CSS, JavaScript, Vite, GitHub Pages, REST API, Figma. Libraries: Axios, Swiper, iziToast."
        link="https://tor10s.github.io/script-masters/"
        repo="https://github.com/TOR10S/script-masters"
      />
      <ProjectsItem
        title="Project Name"
        description="description"
        techList="techList"
        link="#"
      />
      <ProjectsItem
        title="Project Name"
        description="description"
        techList="techList"
        link="#"
      />
    </section>
  );
};

export default Projects;
