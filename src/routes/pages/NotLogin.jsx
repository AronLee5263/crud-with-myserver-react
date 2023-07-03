import classes from "./NotLogin.module.css";

import { Outlet } from "react-router-dom";

export default function NotLogin() {
  return (
    <>
      <main>
        <div className={classes.temp}>
          <p className={classes.text}>이용하려면 로그인 해주세요.</p>
        </div>
      </main>
    </>
  );
}
