import classes from "./AuthHeader.module.css";

import BackButton from "../../components/BackButton";

import { Link } from "react-router-dom";

export default function AuthMainHeader() {
  return (
    <>
      <div className={classes.sections}>
        <div className={classes.column}>
          <div className={classes.backBtnSection}>
            <Link to=".." type="button" className={classes.back_button_container}>
              <span className={classes.text}> 취소</span>
            </Link>
          </div>
        </div>

        <div className={classes.column}>
          <div className={classes.logoSection}>
            <img className={classes.logo} src="/assets/images/logo/disc_logo_1.png" alt="app_logo" />
          </div>
        </div>

        <div className={classes.column}></div>
      </div>
    </>
  );
}
