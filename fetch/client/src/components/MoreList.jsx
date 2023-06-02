import classes from "./MoreList.module.css";

import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline, MdOutlineArrowBackIosNew } from "react-icons/md";

export default function MoreList({ onCancelButton }) {
  return (
    <>
      <div className={classes.container}>
        <button className={classes.update}>
          수정
          <span className={classes.icon}>
            <AiOutlineEdit size={24} />
          </span>
        </button>

        <button className={classes.delete}>
          삭제
          <span className={classes.icon}>
            <MdDeleteOutline size={24} />
          </span>
        </button>

        <button className={classes.cancel} onClick={onCancelButton}>
          <span className={classes.cancelIcon}>
            <MdOutlineArrowBackIosNew size={40} />
          </span>
        </button>
      </div>
    </>
  );
}
