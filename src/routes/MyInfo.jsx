import classes from "./MyInfo.module.css";

import { Outlet } from "react-router-dom";

export default function MyInfo() {
  return (
    <>
      <Outlet />
      <main>
        <div className={classes.temp}> 내정보 페이지 구현중</div>
      </main>
    </>
  );
}
