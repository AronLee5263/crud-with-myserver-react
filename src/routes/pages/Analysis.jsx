import classes from "./Analysis.module.css";

import { Outlet } from "react-router-dom";

export default function Analysis() {
  return (
    <>
      <Outlet />
      <main>
        <div className={classes.temp}> 분석 페이지 구현중</div>
      </main>
    </>
  );
}
