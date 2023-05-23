import classes from "./BackButton.module.css";
import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <>
      <Link to="../" type="button" className={classes.back_button_container}>
        <button className={classes.back_button}> 뒤로가기</button>
      </Link>
    </>
  );
}
