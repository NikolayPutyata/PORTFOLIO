import s from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.container}>
        <div className={s.profile}>
          <img src="path/to/your-photo.jpg" alt="Mykola Putyata" />
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
