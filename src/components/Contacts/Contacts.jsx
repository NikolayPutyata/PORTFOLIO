import { useEffect, useRef, useState } from "react";
import s from "./Contacts.module.css";

const Contacts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`${s.section} ${isVisible ? s.loaded : ""}`}
      id="contacts"
      ref={sectionRef}
    >
      <h2>Personal Information</h2>
      <p className={s.specialDescription}>
        Email:{" "}
        <a href="mailto:nikolayputyata@gmail.com">nikolayputyata@gmail.com</a>
      </p>
      <p className={s.specialDescription}>
        Phone: <a href="tel:+380961987961">+38(096)1-987-96-1</a>
      </p>
      <p className={s.specialDescription}>
        Telegram:{" "}
        <a
          href="https://t.me/nikolayputyata"
          target="_blank"
          rel="noopener noreferrer"
        >
          t.me/nikolayputyata
        </a>
      </p>
      <p className={s.specialDescription}>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/mykola-putyata-2b598622a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/mykola-putyata
        </a>
      </p>
      <p className={s.specialDescription}>
        GitHub:{" "}
        <a
          href="https://github.com/NikolayPutyata"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/NikolayPutyata
        </a>
      </p>
      <p className={s.specialDescription}>Address: Kyiv, Ukraine</p>
    </section>
  );
};

export default Contacts;
