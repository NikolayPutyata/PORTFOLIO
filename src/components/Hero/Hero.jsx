import s from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.container}>
        <div className={s.profile}>
          <picture>
            <source srcSet="" media="(min-width: 1025px)" />
            <source
              srcSet="/src/img/планшет.jpg"
              media="(min-width: 768px) and (max-width: 1024px)"
            />
            <source srcSet="/src/img/телефон.jpg" media="(max-width: 767px)" />
            <img src="/src/img/телефон.jpg" alt="Mykola Putyata" />
          </picture>
          <div className={s.divider}></div>
          <div className={s.contacts}>
            <p>FULLSTACK DEVELOPER</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
