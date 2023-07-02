import classes from "./RootLayOutAuth.module.css";

import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

import NoMobile, { UseIsMobile } from "../../components/NoMobile";

export default function RootLayOutAuth() {
  const mobileSize = UseIsMobile();
  const location = useLocation();

  const what = location.state.what;
  const text = location.state.text;

  if (mobileSize === false) {
    return <NoMobile />;
  }

  console.log("what : ", what);
  console.log("text : ", text);

  return (
    <>
      <div>dddd</div>
    </>
  );
}
