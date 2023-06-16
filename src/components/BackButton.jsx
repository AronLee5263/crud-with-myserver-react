import classes from "./BackButton.module.css";

import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <>
      <Link to="../" type="button" className={classes.back_button_container}>
        <span className={classes.text}> 취소</span>
      </Link>
    </>
  );
}
