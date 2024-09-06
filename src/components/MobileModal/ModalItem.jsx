import s from "./MobileModal.module.css";

const ModalItem = ({ link, closeFu, children }) => {
  return (
    <a href={link} onClick={closeFu}>
      <li className={s.menuItem}>{children}</li>
    </a>
  );
};

export default ModalItem;
