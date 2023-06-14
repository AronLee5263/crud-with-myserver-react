import classes from "./SignUp.module.css";
import { useState } from "react";

import {
  firebaseConfig,
  initializeApp_Alias,
  getAnalytics_Alias,
  getAuth_Alias,
  createUserWithEmailAndPassword_Alias,
} from "../../firebase/firebaseConfig";

import BackButton from "../components/BackButton";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp_Alias(firebaseConfig);
  const analytics = getAnalytics_Alias(app);

  function emailTypingHandler(e) {
    setEmail(e.target.value);
  }
  function passwordTypingHandler(e) {
    setPassword(e.target.value);
  }

  function singUpHandler(event) {
    event.preventDefault();
    const auth = getAuth_Alias();
    console.log(email, password);

    createUserWithEmailAndPassword_Alias(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("회원가입이 성공했어요");
        console.log("userCredential : ", userCredential);

        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log("회원가입이 실패했어요 ");
        console.log("error : ", error);
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  function showLogHandler(event) {
    event.preventDefault();
    console.log(app);
  }

  return (
    <div className={classes.main}>
      <div className={classes.topSection}>
        <BackButton />
        <h1 className={classes.title}>회원가입 페이지</h1>
        <button type="button" onClick={showLogHandler}>
          initializeApp app 콘솔찎는 버튼
        </button>
      </div>

      <form className={classes.middleSection}>
        <div>
          email : <input type="email" onChange={emailTypingHandler} id="signUpEmail" />
        </div>
        <div>
          password : <input type="password" onChange={passwordTypingHandler} id="signUpPassword" />
        </div>
        <button type="submit" onClick={singUpHandler} id="signUpButton">
          회원가입 하기
        </button>
      </form>

      <div className={classes.bottomSection}>
        <p className={classes.text}>지금 사람들이 어떻게 디스크를 관리하는지 알아보세요!</p>
      </div>
    </div>
  );
}
