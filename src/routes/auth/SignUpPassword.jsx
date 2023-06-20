import classes from "./SignUpPassword.module.css";

import { useState } from "react";

import { auth } from "../../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import BackButton from "../../components/BackButton";
import SignUpEmailLink from "./SignUpEmailLink";

export default function SignUpPassword() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function emailTypingHandler(e) {
    setUserEmail(e.target.value);
  }
  function passwordTypingHandler(e) {
    setUserPassword(e.target.value);
  }

  function singUpWithEmailAndPasswordHandler(event) {
    event.preventDefault();
    console.log(userEmail, userPassword);

    createUserWithEmailAndPassword(auth, userEmail, userPassword)
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

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  function showLogHandler(event) {
    event.preventDefault();
    console.log(app);
  }

  return (
    <div className={classes.wholePageSignUpPassword}>
      <div className={classes.sections}>
        <div className={classes.topSection}>
          <p className={classes.title}> 계정을d 생성하세요</p>
        </div>

        <div className={classes.middleSection}>
          <form className={classes.authForm}>
            <div>
              email : <input type="email" onChange={emailTypingHandler} id="signUpEmailPassword" />
            </div>

            <button type="button" onClick={singUpWithEmailAndPasswordHandler} id="signUpButton">
              회원가입 하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className={classes.main}>
  //     <div className={classes.topSection}>
  //       <div className={classes.header}>
  //         <BackButton />
  //         <img className={classes.logo} src="/assets/images/logo/disc_logo_1.png" alt="app_logo" />
  //       </div>

  //       {/* <h2 className={classes.title}>회원가입 페이지</h2> */}
  //       <p className={classes.text}>사람들이 어떻게 디스크를 관리하는지 알아보세요.</p>
  //     </div>
  //     <div className={classes.authSection}>
  //       <hr />

  //       <SignUpEmailLink userEmail={userEmail} />
  //       <hr />
  //       <form className={classes.emailPasswordAuth}>
  //         <div>
  //           email : <input type="email" onChange={emailTypingHandler} id="signUpEmail" />
  //         </div>

  //         <button type="button" onClick={singUpWithEmailAndPasswordHandler} id="signUpButton">
  //           회원가입 하기
  //         </button>
  //       </form>
  //     </div>

  //     <div className={classes.bottomSection}></div>

  //     <div className={classes.temp}>
  //       <button className={classes.initializeAppBtn} type="button" onClick={showLogHandler}>
  //         initializeApp app 콘솔버튼
  //       </button>
  //     </div>
  //   </div>
  // );
}
