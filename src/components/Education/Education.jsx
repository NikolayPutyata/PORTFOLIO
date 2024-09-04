import s from "./Education.module.css";

const Education = () => {
  return (
    <section className={s.section}>
      <h2>Education</h2>
      <div className={s.education}>
        <ul>
          <li>
            <strong>IT School GoIt</strong>
            <br />
            Fullstack Developer, 2024 - 2025 (expected)
            <br />
            Kyiv, Ukraine
          </li>
          <li>
            <strong>National University of Trade and Economics</strong> (укр.
            Національний Торгово-економічний університет)
            <br />
            Master&#39;s in Law, 2023 - 2025 (expected)
            <br />
            Kyiv, Ukraine
          </li>
          <li>
            <strong>State Tax University</strong> (укр. Державний Податковий
            університет)
            <br />
            Bachelor of Law, 2019 - 2023
            <br />
            Irpin, Ukraine
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
