import { Link } from "react-router-dom";
import { MdPostAdd, MdMessage } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.category}>
        <h1 className={classes.community}>커뮤니티</h1>
        <h1 className={classes.goal}>달성기록</h1>
        <h1 className={classes.info}>내 정보</h1>
      </div>

      <p>
        <Link to="/create-post" className={classes.button}>
          <AiOutlinePlus size={24} className={classes.icon} />
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
