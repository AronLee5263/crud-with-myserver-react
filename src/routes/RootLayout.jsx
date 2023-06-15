import { Outlet } from "react-router-dom";

import MainHeader from "../components/Mainheader";

import classes from "./RootLayOut.module.css";

export default function RootLayOut() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}
