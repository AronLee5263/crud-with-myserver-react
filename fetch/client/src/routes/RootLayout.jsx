import { Outlet } from "react-router-dom";

import MainHeader from "../components/Mainheader";
export default function RootLayOut() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}
