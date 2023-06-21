import classes from "./Post.module.css";

import { Link } from "react-router-dom";

import { MdMoreHoriz } from "react-icons/md";

export default function Post({ id, author, body, onOpenPopup }) {
  return (
    <>
      <li className={classes.post}>
        <div className={classes.sections}>
          <div className={classes.leftSection}>
            <div className={classes.postProfileIcon}>icon</div>
            <span className={classes.tempText}>여백</span>
          </div>
          <div className={classes.rightSection}>
            <p className={classes.author}>{author}</p>
            <p className={classes.body}>{body}</p>
            <button type="button" className={classes.button} onClick={onOpenPopup}>
              <MdMoreHoriz size={34} />
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
