import classes from "./BackButton.module.css";

import { Link, useNavigate } from "react-router-dom";

export default function BackButton() {
  let navigate = useNavigate();

  return (
    <>
      <Link to="../" type="button" className={classes.back_button_container}>
        <span className={classes.text}> 취소</span>
      </Link>

      {/* <button
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        이전 페이지
      </button> */}
    </>
  );
}
