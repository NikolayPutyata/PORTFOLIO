import s from "./MobileModal.module.css";
import { TfiClose } from "react-icons/tfi";
import ModalItem from "./ModalItem";

const MobileModal = ({ isOpen, closeModal }) => {
  return (
    <div className={`${s.modal} ${isOpen ? s.modalActive : ""}`}>
      <button className={s.closeButton} onClick={closeModal}>
        <TfiClose className={s.closeButtonIcon} />
      </button>
      <ul className={s.menuList}>
        <ModalItem link="#contacts" closeFu={closeModal}>
          Contacts
        </ModalItem>
        <ModalItem link="#skills" closeFu={closeModal}>
          Skills
        </ModalItem>
        <ModalItem link="#projects" closeFu={closeModal}>
          Projects
        </ModalItem>
        <ModalItem link="#mini-works" closeFu={closeModal}>
          Mini Works
        </ModalItem>
        <ModalItem link="#about" closeFu={closeModal}>
          About Me
        </ModalItem>
        <ModalItem link="#languages" closeFu={closeModal}>
          Languages
        </ModalItem>
        <ModalItem link="#education" closeFu={closeModal}>
          Education
        </ModalItem>
      </ul>
    </div>
  );
};

export default MobileModal;
