import classes from "./RootLayOutSignUp.module.css";

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import BackButton from "../../../components/BackButton";
import SignUpSubForm from "./SignUpSubForm";

import SignUpPassword from "./SignUpPassword";
import SignUpEmailLink from "./SignUpEmailLink";

import NoMobile, { UseIsMobile } from "../../../components/NoMobile";

export default function RootLayOutSignUp() {
  const mobileSize = UseIsMobile();

  let navigate = useNavigate();

  const [isClickEP, setIsClickEP] = useState(false);
  const [isClickLink, setIsClickLink] = useState(false);

  const clickSignPasswordHandler = (e) => {
    e.preventDefault();
    setIsClickEP(true);
    navigate("with_password");
  };

  const clickSignLinkHandler = (e) => {
    setIsClickLink(true);
    navigate("with_email_link");
  };

  useEffect(() => {
    // login 가 true일떄만 실행되게 바로 리턴하는 패턴
    if (isClickEP === false) return;

    setIsClickEP(false);
    console.log("isClickEP____ : ", isClickEP);

    if (isClickEP) {
      navigate("with_password");
      setIsClickEP(false);
    }
  }, [isClickEP]);

  useEffect(() => {
    // isClickLink 가 true일떄만 실행되게 바로 리턴하는 패턴
    if (isClickLink === false) return;

    setIsClickLink(false);
    console.log("isClickLink____ : ", isClickLink);

    if (isClickLink) {
      navigate("with_email_link");
      setIsClickLink(false);
    }
  }, [isClickLink]);

  let content;

  if (mobileSize === false) {
    return <NoMobile />;
  }

  if (isClickEP) {
    content = (
      <>
        <SignUpPassword />
        {/* <SignUpSubForm clickSignPasswordHandler={clickSignPasswordHandler} /> */}
      </>
    );
  } else if (isClickLink) {
    content = (
      <>
        <SignUpEmailLink />
        {/* <SignUpSubForm clickSignLinkHandler={clickSignLinkHandler} /> */}
      </>
    );
  } else if (!isClickEP && !isClickLink) {
    content = (
      <>
        <SignUpSubForm
          clickSignPasswordHandler={clickSignPasswordHandler}
          clickSignLinkHandler={clickSignLinkHandler}
        />
      </>
    );
  }

  return (
    <>
      <div className={classes.whole}>
        <div className={classes.wholePage}>
          <div className={classes.header}>
            <BackButton />
            <img className={classes.logo} src="/assets/images/logo/disc_logo_1.png" alt="app_logo" />
          </div>

          {content}
          {/* {isClickEP ? <SignUpPassword /> : <SignUpSubForm clickSignPasswordHandler={clickSignPasswordHandler} />}
        {isClickLink ? <SignUpEmailLink /> : <SignUpSubForm clickSignLinkHandler={clickSignLinkHandler} />} */}

          {/* {<SignUpSubForm onClickSignPassword={clickSignPasswordHandler} onClickSignLink={clickSignLinkHandler} />} */}
        </div>
      </div>
    </>
  );
}
