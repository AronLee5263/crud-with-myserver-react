import { MdPostAdd, MdMessage } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

import classes from "./MainHeader.module.css";

function MainHeader({ onOpenModal }) {
  return (
    <header className={classes.header}>
      <div className={classes.category}>
        <h1 className={classes.community}>커뮤니티</h1>
        <h1 className={classes.goal}>달성기록</h1>
        <h1 className={classes.info}>내 정보</h1>
      </div>

      <p>
        <button className={classes.button} onClick={onOpenModal}>
          <AiOutlinePlus size={24} />
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
