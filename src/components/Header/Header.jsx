import s from "./Header.module.css";

import { TfiAlignRight } from "react-icons/tfi";

const Header = ({ openMenuFu }) => {
  return (
    <header className={s.header}>
      <button className={s.menuButton} onClick={openMenuFu}>
        <TfiAlignRight className={s.buttonIcon} />
      </button>
    </header>
  );
};

export default Header;
