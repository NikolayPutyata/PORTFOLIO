import s from "./MobileModal.module.css";
import { TfiClose } from "react-icons/tfi";

const MobileModal = ({ isOpen, closeModal }) => {
  return (
    <div className={`${s.modal} ${isOpen ? s.modalActive : ""}`}>
      <button className={s.closeButton} onClick={closeModal}>
        <TfiClose className={s.closeButtonIcon} />
      </button>
      <ul className={s.menuList}>
        <li className={s.menuItem}>Contacts</li>
        <li className={s.menuItem}>Skills</li>
        <li className={s.menuItem}>Projects</li>
        <li className={s.menuItem}>Mini Works</li>
        <li className={s.menuItem}>About Me</li>
        <li className={s.menuItem}>Languages</li>
        <li className={s.menuItem}>Education</li>
      </ul>
    </div>
  );
};

export default MobileModal;
