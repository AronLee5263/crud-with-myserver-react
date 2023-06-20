import classes from "./SignUpEmailLink.module.css";

import { auth, actionCodeSettings } from "../../../firebase/firebaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import EmailLinkSent from "./EmailLinkSent";

import { sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

export default function SignUpEmailLink({ userEmail }) {
  const [isSendEmailLink, setIsSendEmailLink] = useState(false);
  const navigate = useNavigate();

  function emailTypingHandler(e) {
    setUserEmail(e.target.value);
  }

  //   sendSignInLinkToEmail(auth, userEmail, actionCodeSettings)
  //     .then(() => {
  //       // The link was successfully sent. Inform the user.
  //       // Save the email locally so you don't need to ask the user for it again
  //       // if they open the link on the same device.
  //       window.localStorage.setItem("emailForSignIn", userEmail);
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ...
  //     });

  const sendSignInLinkToEmailHandler = (event) => {
    event.preventDefault();

    sendSignInLinkToEmail(auth, userEmail, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", userEmail);
        console.log("이메일로 인증 링크를 사용자에게 성공적으로 전송했습니다 + 이메일 저장 완료");
        console.log(userEmail);
      })
      .catch((error) => {
        console.log("사용자의 이메일로 인증 링크를 전송하는 데 실패했습니다");
        console.log("error 내용 : ", error);
      });
  };

  if (isSignInWithEmailLink(auth, window.location.href)) {
    let email = window.localStorage.getItem();

    console.log("email : ", email);
    if (!email) {
      email = window.prompt("확인을 위해 이메일을 제공해주세요");
    }
    // navigate("..", { state: { userEmail: email } });

    // !email
    //   ? (email = window.prompt("인증을 위해 이메일을 입력해주세요"))
    //   : navigate("/", { state: { userEmail: email } });

    // User verification: Prompt user to confirm their email before proceeding
    if (!confirmEmail(email)) {
      console.log("Email confirmation failed");
      return;
    }

    signInWithEmailLink(auth, email, window.location.href)
      .then((result) => {
        console.log("이메일로 전송된 링크의 인증에 성공했습니다 + 가입이 완료되었습니다");
        console.log("localStorage에 저장된 user email 삭제");
        window.localStorage.removeItem("emailForSignIn");

        console.log("result : ", result);
        console.log(
          "result.additionalUserInfo.isNewUser, 기존의 사용자인가요? : ",
          result.additionalUserInfo.isNewUser
        );
        navigate("/", { state: { userEmail: email } });
      })
      .catch((error) => {
        console.log("링크방식 회원가입 실패 ");
        console.log("error : ", error);
      });
  }

  // Helper function to confirm the email before proceeding
  const confirmEmail = (email) => {
    // Implement your email confirmation logic here
    return window.confirm(`Please confirm your email: ${email}`);
  };

  return (
    <>
      <div className={classes.wholePageLink}>
        <p className={classes.title}>계정을 생성하세요</p>
        <p className={classes.subTitle}>사용중인 이메일 링크 인증 방식 회원가입</p>

        <form className={classes.emailLinkAuth}>
          <input className={classes.textName} required placeholder="이름" type="email" onChange={emailTypingHandler} />
          <div className={classes.line}></div>

          <input
            className={classes.textEmail}
            required
            placeholder="사용중인 이메일 주소"
            onChange={emailTypingHandler}
          />
          <div className={classes.line}></div>
        </form>

        <div className={classes.buttonSection}>
          <button className={classes.authButton} type="button" onClick={sendSignInLinkToEmailHandler}>
            가입
          </button>
        </div>
        {/* {isSendEmailLink && <EmailLinkSent isSendLink={isSendEmailLink} />} */}
      </div>
    </>
  );
}
