import classes from "./SignUpMainHeader.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BackButton from "../../components/BackButton";

import SignUpMainForm from "./SignUpMainForm";
import SignUpPassword from "./SignUpPassword";
import SignUpEmailLink from "./SignUpEmailLink";

export default function SignUpMainHeader() {
  const [isClickEP, setIsClickEP] = useState(false);
  const [isClickLink, setIsClickLink] = useState(false);
  let navigate = useNavigate();

  const signUpWithPasswordHanlder = (e, isClickEP) => {
    // e.preventDefault();
    setIsClickEP(true);
  };
  const signUpWithEmailLinkHanlder = (e) => {
    setIsClickLink(true);
  };

  const signUpForm = () => {
    if (isClickEP) {
      return <SignUpPassword />;
    } else if (!isClickEP) {
      return <SignUpMainForm onClickSignUpPassword={(e) => signUpWithPasswordHanlder(e, isClickEP)} />;
    } else if (isClickLink) {
      return <SignUpEmailLink />;
    } else if (!isClickLink) {
      return <SignUpMainForm onClickSignUpEmailLink={signUpWithEmailLinkHanlder} isClickEP={isClickLink} />;
    }
  };

  return (
    <>
      <div className={classes.wholePage}>
        <div className={classes.header}>
          <BackButton />
          <img className={classes.logo} src="/assets/images/logo/disc_logo_1.png" alt="app_logo" />
        </div>

        {signUpForm()}
      </div>
    </>
  );
}

/* <div className={classes.temp}>
        <button className={classes.initializeAppBtn} type="button" onClick={showLogHandler}>
          initializeApp app 콘솔버튼
        </button>*/
