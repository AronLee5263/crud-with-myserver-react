import classes from "./SignUpSubForm.module.css";

import BackButton from "../../../components/BackButton";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpSubForm({ onClickSignPassword, onClickSignLink }) {
  let navigate = useNavigate();

  //   const [flag1, setFlag1] = useState(false);

  return (
    <div className={classes.sections}>
      <div className={classes.titleSection}>
        <p className={classes.titleText}>사람들이 어떻게 디스크를 관리하는지 알아보세요.</p>
      </div>

      <div className={classes.authSection}>
        <Link className={classes.SignUpGoogle}>
          <img className={classes.googleLogo} src="/assets/images/logo/google_logo.png" alt="google_logo" />
          <span className={classes.googleText}>Google로 계속하기</span>
        </Link>

        <div className={classes.also}>
          <div className={classes.alsoLine}></div>
          <div className={classes.alsoText}>
            <span>또는</span>
          </div>
          <div className={classes.alsoLine}></div>
        </div>

        <button
          type="button"
          // to="/sign_up/with_email_link"
          className={classes.SignUpEmailLink}
          onClick={onClickSignLink}
        >
          <span className={classes.authText}>계정 만들기 / Email-Link</span>
        </button>

        <button
          type="button"
          // to="/sign_up/with_password"
          className={classes.SignUpPassword}
          onClick={onClickSignPassword}
        >
          <span className={classes.authText}>계정 만들기 / Email-password</span>
        </button>
      </div>

      <div className={classes.bottomSection}>
        <p className={classes.policyAgree}>
          가입하면 disc doctor의 <span className={classes.policyAgreeText}>이용약관, 개인정보, 쿠키사용</span>에
          동의하게 됩니다.
        </p>

        <div className={classes.exsitingAccount}>
          <p className={classes.exsitingAccountText}>이미 계정이 있으세요? </p>
          <span className={classes.loginLink}> 로그인 하기</span>
        </div>
      </div>
    </div>
  );
}
