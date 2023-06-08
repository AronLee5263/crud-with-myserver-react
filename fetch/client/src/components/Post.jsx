import { Link } from "react-router-dom";

import classes from "./Post.module.css";

import { MdMoreHoriz } from "react-icons/md";

export default function Post({ id, author, body, onOpenPopup }) {
  return (
    <>
      {}
      <li className={classes.post}>
        <p className={classes.author}>{author}</p>
        <p className={classes.body}>{body}</p>
        <button type="button" className={classes.button} onClick={onOpenPopup}>
          <MdMoreHoriz size={34} />
        </button>
      </li>
    </>
  );
}
