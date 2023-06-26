import classes from "./Splash.module.css";

export default function Splash() {
  return (
    <>
      <div className={classes.background}>
        <img className={classes.splash} src="/assets/images/logo/disc_logo_3.png" alt="spalash" />
      </div>
    </>
  );
}
// 자동 줄바꿈 해제
