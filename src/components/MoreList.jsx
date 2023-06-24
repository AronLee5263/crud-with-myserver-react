import classes from "./MoreList.module.css";

import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline, MdOutlineArrowBackIosNew } from "react-icons/md";

export default function MoreList({ onCancelButton }) {
  return (
    <>
      <div className={classes.container}>
        <button type="button" className={classes.cancel} onClick={onCancelButton}>
          <MdOutlineArrowBackIosNew size={25} className={classes.cancelIcon} />
        </button>

        <button type="button" className={classes.update}>
          <p className={classes.text}>수정</p>
          <AiOutlineEdit size={20} className={classes.icon} />
        </button>

        <button type="button" className={classes.delete}>
          <p className={classes.text}>삭제</p>
          <MdDeleteOutline size={20} className={classes.icon} />
        </button>
      </div>
    </>
  );
}
