import classes from "./NotLogin.module.css";

import { Outlet, Link } from "react-router-dom";

import NoMobile, { UseIsMobile } from "../../components/NoMobile";

import NotLoginHeader from "../../components/NotLoginHeader";
import BackButton from "../../components/BackButton";

export default function NotLogin() {
  const mobileSize = UseIsMobile();

  let content;

  if (mobileSize === false) {
    content = <NoMobile />;
  }

  // return <>{content}</>;

  return (
    <>
      <div className={classes.box}>
        <NotLoginHeader />

        <div className={classes.temp}>
          {/* <div className={classes.back}>
            <BackButton />
          </div> */}

          <p className={classes.text}>이용하려면 로그인 해주세요.</p>
          <p className={classes.subText}>임시페이지 입니다.</p>
        </div>
        <div className={classes.auth}>
          <Link to="/sign_up" className={classes.signup}>
            {" "}
            회원가입 하러 가기{" "}
          </Link>
          <Link to="/login" className={classes.login}>
            {" "}
            로그인 하러 가기{" "}
          </Link>
        </div>
      </div>
    </>
  );
}
