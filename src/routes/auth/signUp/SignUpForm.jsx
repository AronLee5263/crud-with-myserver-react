import classes from "./SignUpForm.module.css";

import { Link, useNavigate } from "react-router-dom";

// import SignUpEmailLink from "./SignUpEmailLink";
// import SignUpPassword from "./SignUpPassword";

export default function SignUpForm({ onLink, onPassword }) {
  // let navigate = useNavigate();
  // const [isClickLink, setIsClickLink] = useState(false);
  // const [isClickEmailPassword, setIsClickEmailPassword] = useState(false);

  // useEffect(() => {
  //   // signUp 가 true일떄만 실행되게 바로 리턴하는 패턴
  //   if (isClickLink === false) return;

  //   if (isClickLink) {
  //     navigate("with_email_link", {
  //       state: {
  //         how: "link",
  //         text: "링크방식 회원가입 클릭",
  //       },
  //     });
  //     setIsClickLink(false);
  //   }
  // }, [isClickLink]);

  // useEffect(() => {
  //   // signUp 가 true일떄만 실행되게 바로 리턴하는 패턴
  //   if (isClickEmailPassword === false) return;

  //   if (isClickEmailPassword) {
  //     navigate("with_password", {
  //       state: {
  //         how: "password",
  //         text: "패스워드 방식 회원가입 클릭",
  //       },
  //     });
  //     setIsClickEmailPassword(false);
  //   }
  // }, [isClickEmailPassword]);

  return (
    <>
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
            onClick={onLink}
          >
            <span className={classes.authText}>계정 만들기 / Email-Link</span>
          </button>

          <button
            type="button"
            // to="/sign_up/with_password"
            className={classes.SignUpPassword}
            onClick={onPassword}
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
            <Link className={classes.loginLink}> 로그인 하기</Link>
          </div>
        </div>
      </div>
    </>
  );
}
