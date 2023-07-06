import classes from "./RequestLogin.module.css";

import { Outlet } from "react-router-dom";

export default function RequestLogin() {
  return (
    <>
      <Outlet />
      <main>
        <div className={classes.temp}>
          <span className={classes.text}>
            프로필 아이콘을 눌러서 <br />
            회원가입을 진행한 다음 이용해주세요
          </span>
        </div>
      </main>
    </>
  );
}
