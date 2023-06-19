import { auth } from "../../../firebase/firebaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import EmailLinkSent from "./EmailLinkSent";

import { actionCodeSettings } from "../../../firebase/firebaseConfig";
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
    console.log(userEmail);

    sendSignInLinkToEmail_Alias(auth, userEmail, actionCodeSettings)
      .then(() => {
        // 링크가 성공적으로 전송되었습니다. 사용자에게 알립니다.
        // 사용자에게 다시 묻지 않도록 전자 메일을 로컬로 저장
        // 동일한 장치에서 링크를 여는 경우.
        window.localStorage.setItem("emailForSignIn", userEmail);
        console.log("사용자의 이메일에 인증 링크 전송 성공 + 이메일 저장");
      })
      .catch((error) => {
        console.log("사용자의 이메일에 인증 링크 전송 실패 ");
        console.log("error 내용 : ", error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  if (isSignInWithEmailLink(auth, window.location.href)) {
    let email = window.localStorage.getItem();

    console.log("email : ", email);
    // if (!email) {
    //   email = window.prompt("Please provide your email for confirmation");
    // }
    // navigate("..", { state: { userEmail: email } });

    !email
      ? (email = window.prompt("Please provide your email for confirmation"))
      : navigate("..", { state: { userEmail: email } });

    signInWithEmailLink_Alias(auth, email, window.location.href)
      .then((result) => {
        console.log("링크 보낸 이메일 인증 성공 + 회원가입 완료 ");
        console.log("localStorage에 저장한 user email 삭제 ");
        window.localStorage.removeItem("emailForSignIn");

        console.log("result : ", result);
        console.log("result.additionalUserInfo.isNewUser, 기존의 사용자임? : ", result.additionalUserInfo.isNewUser);
      })
      .catch((error) => {
        console.log("링크방식 회원가입 실패 ");
        console.log("error : ", error);
      });
  }

  return;
  <>
    <div className={classes.emailLinkAuth}>
      사용중인 이메일 링크로 가입
      <form>
        email : <input type="email" onChange={emailTypingHandler} id="signUpEmailLink" />
      </form>
      {/* <button type="button" onClick={sendSignInLinkToEmailHandler}>
        회원가입
      </button> */}
    </div>
    {isSendEmailLink && <EmailLinkSent isSendLink={isSendEmailLink} />}
    <div>1</div>
    <div>2</div>
    <div>3333333333333</div>
    <div>44444444</div>
    <div>55555555</div>
    <div>666666666</div>
  </>;
}
