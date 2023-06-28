import classes from "./Goal.module.css";

import { Outlet } from "react-router-dom";

export default function Goal() {
  return (
    <>
      <Outlet />
      <main>
        <div className={classes.temp}> 목표달성 페이지 구현중</div>
      </main>
    </>
  );
}
