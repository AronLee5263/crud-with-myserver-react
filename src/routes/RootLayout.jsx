import { Outlet } from "react-router-dom";

import MainHeader from "../components/Mainheader";
import NoMobile from "../components/NoMobile";

import classes from "./RootLayOut.module.css";

export default function RootLayOut() {
  return (
    <>
      <MainHeader />
      <Outlet />
      <NoMobile />
    </>
  );
}
