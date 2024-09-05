import s from "./MobileModal.module.css";
import { TfiClose } from "react-icons/tfi";

const MobileModal = ({ isOpen, closeModal }) => {
  return (
    <div className={`${s.modal} ${isOpen ? s.modalActive : ""}`}>
      <button className={s.closeButton} onClick={closeModal}>
        <TfiClose className={s.closeButtonIcon} />
      </button>
      <ul className={s.menuList}>
        <li className={s.menuItem}>
          <a href="#contacts">Contacts</a>
        </li>
        <li className={s.menuItem}>
          <a href="#skills">Skills</a>
        </li>
        <li className={s.menuItem}>
          <a href="#projects">Projects</a>
        </li>
        <li className={s.menuItem}>
          <a href="#mini-works">Mini Works</a>
        </li>
        <li className={s.menuItem}>
          <a href="#about">About Me</a>
        </li>
        <li className={s.menuItem}>
          <a href="#languages">Languages</a>
        </li>
        <li className={s.menuItem}>
          <a href="#education">Education</a>
        </li>
      </ul>
    </div>
  );
};

export default MobileModal;
