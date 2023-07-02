import classes from "./RootLayOutSignUp.module.css";

import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation, Outlet } from "react-router-dom";

import NoMobile, { UseIsMobile } from "../../../components/NoMobile";
import AuthHeader from "../AuthHeader";

import SignUpForm from "../signUp/SignUpForm";

export default function RootLayOutSignUp() {
  const mobileSize = UseIsMobile();

  if (mobileSize === false) {
    return <NoMobile />;
  }

  // const location = useLocation();

  // const state = location.state;
  // console.log("state 뭐 있어?", state);

  // if (state.what === "signUp") {
  //   content = (
  //     <>
  //       <SignUpForm></SignUpForm>
  //     </>
  //   );
  // }
  // else if (state.what === "signUp") {
  //   content = (
  //     <>
  //       <SignUpForm ></SignUpForm>
  //     </>
  //   );
  // }

  // const linkHandler = (e) => {
  //   e.preventDefault();
  //   setIsClickLink(true);
  // };

  // function passwordHandler(e) {
  //   setIsClickEmailPassword(true);
  // }

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

  let content;

  if (password || link) {
    return (
      <div className={classes.authPage}>
        <div className={classes.header}>
          <AuthHeader />
        </div>

        <div className={classes.formSection}>
          <Outlet />
          {/* <Outlet/> */}
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
          <Outlet />
          <SignUpForm onPassword={passwordHanlder} onLink={linkHandler} />
          {/* <Outlet/> */}
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

  //       <div className={classes.formSection}>
  //       <Outlet />
  //         <SignUpForm onPassword={passwordHanlder} onLink={linkHandler} />
  //         {/* <Outlet/> */}
  //       </div>
  //     </div>
  //   </>
  // );
}
