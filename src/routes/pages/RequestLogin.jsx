import classes from "./RequestLogin.module.css";

import BackButton from "../../components/BackButton";
import { Link } from "react-router-dom";

// import { Outlet } from "react-router-dom";

export default function RequestLogin() {
  return (
    <>
      {/* <Outlet /> */}

      {/* <BackButton /> */}
      <div className={classes.temp}>
        <span className={classes.text}>
          프로필 아이콘을 눌러서 <br />
          회원가입을 진행한 다음 이용해주세요
        </span>

        <Link to=".." type="button" className={classes.cancel_button}>
          <span className={classes.cancel_text}> 취소</span>
        </Link>
      </div>
    </>
  );
}
