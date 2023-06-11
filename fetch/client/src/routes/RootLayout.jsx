import { Outlet, Link } from "react-router-dom";

import MainHeader from "../components/Mainheader";

import classes from "./RootLayOut.module.css";

export default function RootLayOut() {
  return (
    <>
      <MainHeader />
      <Outlet />
      <div className={classes.buttons}>
        <Link to="/login" className={classes.login}>
          로그인
        </Link>
        <Link to="/sign_up" className={classes.sign_up}>
          계정 만들기
        </Link>
      </div>
    </>
  );
}
