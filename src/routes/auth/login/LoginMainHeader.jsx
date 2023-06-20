import classes from "./LoginMainHeader.module.css";

import { useState } from "react";

import BackButton from "../../../components/BackButton";

import LoginMainForm from "../login/LoginMainForm";
// import LoginPassword from "./LoginPassword";
// import LoginEmailLink from "./LoginEmailLink";

export default function LoginMainHeader() {
  return (
    <>
      <div className={classes.wholePage}>
        <div className={classes.header}>
          <BackButton />
          <img className={classes.logo} src="/assets/images/logo/disc_logo_1.png" alt="app_logo" />
        </div>

        <LoginMainForm />

        {/* {signUpForm()} */}
      </div>
    </>
  );
}

/* <div className={classes.temp}>
        <button className={classes.initializeAppBtn} type="button" onClick={showLogHandler}>
          initializeApp app 콘솔버튼
        </button>*/
