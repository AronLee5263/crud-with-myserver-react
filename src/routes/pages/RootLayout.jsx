import classes from "./RootLayOut.module.css";

import { Outlet, useLocation } from "react-router-dom";

import MainHeader from "../../components/Mainheader";
import NoMobile from "../../components/NoMobile";

import { useEffect, useState, useCallback } from "react";
import Splash from "../../components/Splash";

export default function RootLayOut() {
  const [splashName, setSplashName] = useState("");
  const [test, setTest] = useState(sessionStorage.getItem("splash"));

  useEffect(() => {
    if (test !== "end") {
      sessionStorage.setItem("splash", "start");
      console.log("타임 전 : ", sessionStorage.getItem("splash"));

      const timeoutId = setTimeout(() => {
        sessionStorage.setItem("splash", "end");
        setTest("end");
        console.log("타임 후 : ", sessionStorage.getItem("splash"));

        console.log("삭제 후 : ", sessionStorage.getItem("splash"));
      }, 1200);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  if (sessionStorage.getItem("splash") !== "end") {
    return <Splash />;
  }

  return (
    <>
      <MainHeader />
      <Outlet />
      <NoMobile />
    </>
  );
}
