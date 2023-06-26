import classes from "./RootLayOut.module.css";

import { Outlet, useLocation } from "react-router-dom";

import MainHeader from "../components/Mainheader";
import NoMobile from "../components/NoMobile";

import { useEffect, useState, useCallback } from "react";
import Splash from "../components/Splash";

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

        // localStorage.removeItem("splash");
        console.log("삭제 후 : ", sessionStorage.getItem("splash"));
      }, 1200);

      return () => clearTimeout(timeoutId);
    }

    // const timeoutId = setTimeout(() => {
    //   // localStorage.setItem("splash", "end");

    //   // setTest(localStorage.getItem("splash"));
    //   localStorage.setItem("splash", "end");
    //   setTest("end");
    // }, 1200); // Hide the Splash component after 1 second

    // return () => clearTimeout(timeoutId);
  }, []);

  // useEffect(() => {
  //   const waitSplashImage = () => {
  //     // setShowSplash(true);
  //     // setIsPending(true);

  //     const timer = setTimeout(() => {
  //       // localStorage.getItem(splashName);
  //       // executeCallback(timer);
  //       setShowSplash(false);

  //       // setShowSplash(false);
  //       // setIsPending(false);
  //     }, 1200); // Hide the Splash component after 1.5 seconds

  //     // return () => {
  //     //   console.log("1 타임아웃을 해제하고 콜백 함수를 실행합니다");

  //     //   // 타임아웃 해제 후 실행할 콜백 함수
  //     //   executeCallback(timeoutId);
  //     // };

  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   };

  //   waitSplashImage();
  // }, []);

  // useEffect(() => {
  //   setIsPending(true);
  //   setSplashName("hasShownSplash");

  //   // console.log("splashName1111: ", splashName);

  //   localStorage.setItem(splashName, true);

  //   console.log("넣고 splashName : ", splashName);

  //   const timeoutId = setTimeout(() => {
  //     // localStorage.getItem(splashName);

  //     executeCallback(timeoutId);
  //     // setShowSplash(false);
  //     // setIsPending(false);
  //   }, 1200); // Hide the Splash component after 1.5 seconds
  //   return () => {
  //     console.log("1 타임아웃을 해제하고 콜백 함수를 실행합니다");

  //     // 타임아웃 해제 후 실행할 콜백 함수
  //     // executeCallback(timeoutId);
  //   };
  // }, []);

  // const executeCallback = (id) => {
  //   console.log("2 타임아웃 해제 후 콜백 함수가 실행되었습니다");
  //   clearTimeout(id);
  //   setShowSplash(false);
  //   setIsPending(false);
  //   console.log("3 isPending, showSplash : ", isPending, showSplash);

  //   console.log("삭제직전  splashName : ", splashName);
  //   localStorage.removeItem(splashName);
  // };

  // useEffect(() => {
  //   if (showSplash) {
  //     const timeoutId = setTimeout(() => {
  //       setShowSplash(false);
  //     }, 1500); // Hide the Splash component after 1.5 seconds
  //     return () => clearTimeout(timeoutId); // Clear the timeout when the component unmounts
  //   }
  // }, [showSplash]);

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

  // return (
  //   <>
  //     {test === "end" ? (
  //       <Splash />
  //     ) : (
  //       <>
  //         <MainHeader />
  //         <Outlet />
  //         <NoMobile />
  //       </>
  //     )}
  //   </>
  // );

  // return (
  //   <>
  //     {showSplash && <Splash />}

  //     <MainHeader />

  //     <Outlet />
  //     <NoMobile />
  //   </>
  // );
}
