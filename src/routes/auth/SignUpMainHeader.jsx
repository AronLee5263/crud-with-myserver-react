import classes from "./SignUpMainHeader.module.css";

import { useState } from "react";

import BackButton from "../../components/BackButton";

import SignUpMainForm from "./SignUpMainForm";

export default function SignUpMainHeader() {
  // const [isClickEP, setIsClickEP] = useState(false);
  // const [isClickLink, setIsClickLink] = useState(false);

  // const signUpWithPasswordHanlder = (e, isClickEP) => {
  //   // e.preventDefault();
  //   setIsClickEP(true);
  // };
  // const signUpWithEmailLinkHanlder = (e, isClickLink) => {
  //   setIsClickLink(true);
  // };

  // const signUpForm = () => {
  //   if (isClickEP) {
  //     return <SignUpPassword />;
  //   } else if (!isClickEP) {
  //     return <SignUpMainForm onClickSignUpPassword={(e) => signUpWithPasswordHanlder(e, isClickEP)} />;
  //   } else if (isClickLink) {
  //     return <SignUpEmailLink />;
  //   } else if (!isClickLink) {
  //     return (
  //       <SignUpMainForm
  //         onClickSignUpEmailLink={(e) => signUpWithEmailLinkHanlder(e, isClickLink)}
  //         isClickEP={isClickLink}
  //       />
  //     );
  //   }
  // };

  return (
    <>
      <div className={classes.wholePage}>
        <div className={classes.header}>
          <BackButton />
          <img className={classes.logo} src="/assets/images/logo/disc_logo_1.png" alt="app_logo" />
        </div>

        <SignUpMainForm />

        {/* {signUpForm()} */}
      </div>
    </>
  );
}

/* <div className={classes.temp}>
        <button className={classes.initializeAppBtn} type="button" onClick={showLogHandler}>
          initializeApp app 콘솔버튼
        </button>*/
