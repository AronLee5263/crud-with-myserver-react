import { MdPostAdd, MdMessage } from "react-icons/md";

import classes from "./MainHeader.module.css";

function MainHeader({ onOpenModal }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        disk doctor
      </h1>
      <p>
        <button className={classes.button} onClick={onOpenModal}>
          <MdPostAdd size={24} />
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
