import { useEffect, useState } from "react";
import s from "./Hero.module.css";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`${s.hero} ${isLoaded ? s.loaded : ""}`}>
      <div className={s.container}>
        <div className={s.profile}>
          <picture>
            <source
              srcSet="/src/components/Hero/img/планшет.jpg"
              media="(min-width: 1025px)"
            />
            <source
              srcSet="/src/components/Hero/img/планшет.jpg"
              media="(min-width: 768px) and (max-width: 1024px)"
            />
            <source
              srcSet="/src/components/Hero/img/телефон.jpg"
              media="(max-width: 767px)"
            />
            <img
              src="/src/components/Hero/img/планшет.jpg"
              alt="Mykola Putyata"
            />
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
