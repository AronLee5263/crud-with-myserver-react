import classes from "./SignUp.module.css";

import { useState } from "react";

import {
  firebaseConfig,
  initializeApp_Alias,
  getAnalytics_Alias,
  getAuth_Alias,
  createUserWithEmailAndPassword_Alias,
} from "../../firebase/firebaseConfig";

import {
  sendSignInLinkToEmail_Alias,
  actionCodeSettings,
  isSignInWithEmailLink_Alias,
  signInWithEmailLink_Alias,
} from "../../firebase/firebaseConfig";

import BackButton from "../components/BackButton";

export default function SignUp() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const app = initializeApp_Alias(firebaseConfig);
  const analytics = getAnalytics_Alias(app);
  const auth = getAuth_Alias();

  function emailTypingHandler(e) {
    setUserEmail(e.target.value);
  }
  function passwordTypingHandler(e) {
    setUserPassword(e.target.value);
  }

  function singUpWithEmailAndPasswordHandler(event) {
    event.preventDefault();
    console.log(userEmail, userPassword);

    createUserWithEmailAndPassword_Alias(auth, userEmail, userPassword)
      .then((userCredential) => {
        console.log("회원가입이 성공했어요");
        console.log("userCredential : ", userCredential);

        const user = userCredential.user;
      })
      .catch((error) => {
        console.log("회원가입이 실패했어요 ");
        console.log("error : ", error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  function singUpWithEmailLinkdHandler(event) {
    event.preventDefault();
    console.log(userEmail);

    sendSignInLinkToEmail_Alias(auth, userEmail, actionCodeSettings)
      .then((userCredential) => {
        console.log("1-1번 이메일 링크방식 회원가입이 성공했어요");
        console.log("userCredential : ", userCredential);

        // 링크가 성공적으로 전송되었습니다. 사용자에게 알립니다.
        // 사용자에게 다시 묻지 않도록 전자 메일을 로컬로 저장
        // 동일한 장치에서 링크를 여는 경우.
        window.localStorage.setItem("emailForSignIn", userEmail);
      })
      .catch((error) => {
        console.log("1-2번 이메일 링크방식 회원가입이 실패했어요 ");
        console.log("error : ", error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    if (isSignInWithEmailLink_Alias(auth, window.location.href)) {
      let email = window.localStorage.getItem();
      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
      }
      signInWithEmailLink_Alias(auth, email, window.location.href)
        .then((result) => {
          console.log("2-1차 링크방식 회원가입 성공 ");
          console.log("result : ", result);

          window.localStorage.removeItem("emailForSignIn");
        })
        .catch((error) => {
          console.log("2-2차 링크방식 회원가입 실패 ");
          console.log("error : ", error);
        });
    } else {
      console.log("isSignInWithEmailLink_Alias 를 안하고 지나침");
    }
  }

  function showLogHandler(event) {
    event.preventDefault();
    console.log(app);
  }
  return (
    <div className={classes.main}>
      <div className={classes.topSection}>
        <div className={classes.header}>
          <BackButton />
          <img className={classes.logo} src="/assets/images/logo/disc_logo_1.png" alt="app_logo" />
        </div>

        {/* <h2 className={classes.title}>회원가입 페이지</h2> */}
        <p className={classes.text}>사람들이 어떻게 디스크를 관리하는지 알아보세요.</p>
      </div>
      <div className={classes.authSection}>
        <hr />

        <div className={classes.emailLinkAuth}>
          사용중인 이메일 링크로 가입
          <form>
            email : <input type="email" onChange={emailTypingHandler} id="signUpEmailLink" />
          </form>
          <button type="submit" onClick={singUpWithEmailLinkdHandler} id="signUpButton">
            회원가입
          </button>
        </div>

        <hr />
        <form className={classes.emailPasswordAuth}>
          <div>
            email : <input type="email" onChange={emailTypingHandler} id="signUpEmail" />
          </div>
          <div>
            password : <input type="password" onChange={passwordTypingHandler} id="signUpPassword" />
          </div>
          <button type="submit" onClick={singUpWithEmailAndPasswordHandler} id="signUpButton">
            회원가입 하기
          </button>
        </form>
      </div>

      <div className={classes.bottomSection}></div>

      <div className={classes.temp}>
        <button className={classes.initializeAppBtn} type="button" onClick={showLogHandler}>
          initializeApp app 콘솔버튼
        </button>
      </div>
    </div>
  );
}
