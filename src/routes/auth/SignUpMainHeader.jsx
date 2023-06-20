import classes from "./SignUpMainHeader.module.css";

import { useRecoilState } from "recoil";
// import { isClickSignUpWithPassword, isClickSignUpWithEmailLink } from "../../recoil/SignUpAtom";
import { Link, useNavigate } from "react-router-dom";

import BackButton from "../../components/BackButton";
import SignUpPassword from "./SignUpPassword";
import SignUpEmailLink from "./SignUpEmailLink";

export default function SignUpMainHeader() {
  // const [isClickEP, setIsClickEP] = useRecoilState(isClickSignUpWithPassword);
  // const [isClickLink, setIsClickLink] = useRecoilState(isClickSignUpWithEmailLink);
  let navigate = useNavigate();

  // const clickSignUpWithPasswordHanlder = (e) => {
  //   e.preventDefault();
  //   setIsClickEP(true);
  // };
  // const clickSignUpWithEmailLinkHanlder = () => {
  //   setIsClickLink(true);
  // };

  return (
    <>
      <div className={classes.wholePage}>
        <div className={classes.header}>
          <BackButton />
          <img className={classes.logo} src="/assets/images/logo/disc_logo_1.png" alt="app_logo" />
        </div>

        {/* {isClickEP && <SignUpPassword />}
        {isClickLink && <SignUpEmailLink />} */}

        <div className={classes.sections}>
          <div className={classes.titleSection}>
            <p className={classes.titleText}>사람들이 어떻게 디스크를 관리하는지 알아보세요.</p>
            <button
              type="button"
              onClick={() => {
                navigate(-1);
              }}
            >
              이전 페이지
            </button>
          </div>

          <div className={classes.authSection}>
            <Link className={classes.SignUpGoogle}>
              <img className={classes.googleLogo} src="/assets/images/logo/google_logo.png" alt="google_logo" />
              <span className={classes.googleText}>Google로 계속하기</span>
            </Link>

            <div className={classes.also}>
              <div className={classes.alsoLine}></div>
              <div className={classes.alsoText}>또는</div>
              <div className={classes.alsoLine}></div>
            </div>

            <button
              type="button"
              // to="/sign_up/with_email_link"
              className={classes.SignUpEmailLink}
              // onClick={clickSignUpWithEmailLinkHanlder}
            >
              <span className={classes.authText}>계정 만들기 / Email-Link</span>
            </button>

            <button
              type="button"
              // to="/sign_up/with_password"
              className={classes.SignUpPassword}
              onClick={() => {
                navigate("/sign_up/with_password");
              }}
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

        {/* <div className={classes.temp}>
        <button className={classes.initializeAppBtn} type="button" onClick={showLogHandler}>
          initializeApp app 콘솔버튼
        </button>
      </div> */}
      </div>
    </>
  );
}
