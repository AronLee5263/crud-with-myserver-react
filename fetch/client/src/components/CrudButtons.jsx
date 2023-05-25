import classes from "./CrudButtons.module.css";
import { Link } from "react-router-dom";

export default function CrudButtons() {
  return (
    <div className={classes.button_container}>
      <div className={classes.button_list}>
        <Link to="/create" className={classes.button}>
          <button className={classes.CRUD_button}>create</button>
        </Link>
        <Link to="/read" className={classes.button}>
          <button className={classes.CRUD_button}>read</button>
        </Link>
        <Link to="/update" className={classes.button}>
          <button className={classes.CRUD_button}>update</button>
        </Link>
        <Link to="/delete" className={classes.button}>
          <button className={classes.CRUD_button}>delete</button>
        </Link>
      </div>
    </div>
  );
}
