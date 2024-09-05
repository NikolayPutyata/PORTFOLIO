import s from "./Languages.module.css";

const Languages = () => {
  return (
    <section className={s.section} id="languages">
      <h2>Languages</h2>
      <div className={s.language}>
        <ul>
          <li>
            <strong>English:</strong> Advanced
          </li>
          <li>
            <strong>Ukrainian:</strong> Native
          </li>
          <li>
            <strong>Russian:</strong> Fluent
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Languages;
