import classes from "./Post.module.css";

import { MdMoreHoriz } from "react-icons/md";

export default function Post({ author, body, onOpenMoreModal }) {
  return (
    <>
      {}
      <li className={classes.post}>
        <p className={classes.author}>{author}</p>
        <p className={classes.body}>{body}</p>
        <button className={classes.button} onClick={onOpenMoreModal}>
          <MdMoreHoriz size={34} />
        </button>
      </li>
    </>
  );
}
