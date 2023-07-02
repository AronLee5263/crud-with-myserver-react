import classes from "./LoginPassword.module.css";

import { useState } from "react";

import { auth } from "../../../firebase/config";

export default function LoginPassword() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function emailTypingHandler(e) {
    setUserEmail(e.target.value);
  }
  function passwordTypingHandler(e) {
    setUserPassword(e.target.value);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(nickName, userEmail, userEmail);
  };

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
    <>
      <div className={classes.wholePasswordPage}>
        <p className={classes.title}>시작하려면 이메일 비밀번호를 입력하세요</p>
        <p className={classes.subTitle}>이메일과 비밀번호 방식 로그인</p>

        <form className={classes.emailLinkAuth}>
          <input className={classes.textEmail} required placeholder="이메일 주소" onChange={emailTypingHandler} />
          <div className={classes.line}></div>

          <input
            className={classes.textName}
            required
            placeholder="비밀번호"
            type="password"
            onChange={emailTypingHandler}
            minLength={6}
            maxLength={12}
          />
          <div className={classes.line}></div>
        </form>

        <div className={classes.buttonSection}>
          <button className={classes.authButton} type="button">
            로그인
          </button>
        </div>
        {/* {isSendEmailLink && <EmailLinkSent isSendLink={isSendEmailLink} />} */}
      </div>
    </>
    // <div className={classes.wholePageSignUpPassword}>
    //   <div className={classes.sections}>
    //     <div className={classes.topSection}>
    //       <p className={classes.title}> 계정을d 생성하세요</p>
    //     </div>

    //     <div className={classes.middleSection}>
    //       <form className={classes.authForm}>
    //         <div>
    //           email : <input type="email" onChange={emailTypingHandler} id="signUpEmailPassword" />
    //         </div>

    //         <button type="button" onClick={singUpWithEmailAndPasswordHandler} id="signUpButton">
    //           회원가입 하기
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
}
