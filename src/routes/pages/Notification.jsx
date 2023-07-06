import classes from "./Notification.module.css";

import { Outlet } from "react-router-dom";

export default function Notification() {
  return (
    <>
      <Outlet />
      <main>
        <div className={classes.temp}> 알림 페이지 구현중</div>
      </main>
    </>
  );
}
