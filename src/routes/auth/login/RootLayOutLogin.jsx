import classes from "./RootLayOutLogin.module.css";

import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation, Outlet } from "react-router-dom";

import NoMobile, { UseIsMobile } from "../../../components/NoMobile";
import AuthHeader from "../AuthHeader";

import SignUpForm from "../signUp/SignUpForm";

import LoginForm from "../login/LoginForm";

export default function RootLayOutLogin() {
  const mobileSize = UseIsMobile();
  const location = useLocation();

  const state = location.state;

  if (mobileSize === false) {
    return <NoMobile />;
  }

  const [password, setPassword] = useState(false);
  const [link, setLink] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    // login 가 true일떄만 실행되게 바로 리턴하는 패턴
    if (link === false) return;

    if (link) {
      navigate("with_email_link", {
        state: {
          what: "link",
          text: "link link link link",
        },
      });
      // setLink(false);
    }
  }, [link]);

  useEffect(() => {
    // signUp 가 true일떄만 실행되게 바로 리턴하는 패턴
    if (password === false) return;

    if (password) {
      navigate("with_password", {
        state: {
          how: "password",
          text: "password.. password password",
        },
      });
      // setPassword(false);
    }
  }, [password]);

  const passwordHanlder = (e) => {
    e.preventDefault();
    setPassword(true);
  };

  const linkHandler = (e) => {
    e.preventDefault();
    setLink(true);
  };

  if (password || link) {
    return (
      <div className={classes.authPage}>
        <div className={classes.header}>
          <AuthHeader />
        </div>

        <div className={classes.formSection}>
          <Outlet />
        </div>
      </div>
    );
  }

  if (!password || !link) {
    return (
      <div className={classes.authPage}>
        <div className={classes.header}>
          <AuthHeader />
        </div>

        <div className={classes.formSection}>
          {/* <Outlet /> */}
          <LoginForm onPassword={passwordHanlder} onLink={linkHandler} />
        </div>
      </div>
    );
  }

  // return (
  //   <>
  //     <div className={classes.authPage}>
  //       <div className={classes.header}>
  //         <AuthHeader />
  //       </div>

  //       <div className={classes.formSection}>{content}</div>

  //       {/* <LoginMainForm /> */}
  //     </div>
  //   </>
  // );
}
