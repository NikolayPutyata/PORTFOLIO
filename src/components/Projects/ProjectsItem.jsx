import s from "./Projects.module.css";

const ProjectsItem = ({ title, description, techList, link, repo }) => {
  return (
    <div className={s.project}>
      <h3>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      <p>{description}</p>
      <br />
      <p>{techList}</p>
      {repo && (
        <p>
          <a href={repo} target="_blank" rel="noopener noreferrer">
            Repository
          </a>
        </p>
      )}
    </div>
  );
};

export default ProjectsItem;
