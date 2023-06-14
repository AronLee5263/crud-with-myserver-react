import classes from "./Login.module.css";
import { useState } from "react";

import {
  firebaseConfig,
  initializeApp_Alias,
  getAnalytics_Alias,
  getAuth_Alias,
  signInWithEmailAndPassword_Alias,
} from "../../firebase/firebaseConfig";

import BackButton from "../components/BackButton";

export default function Login() {
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

  function loginHandler(event) {
    event.preventDefault();
    const auth = getAuth_Alias();
    console.log(email, password);

    signInWithEmailAndPassword_Alias(auth, email, password)
      .then((userCredential) => {
        // Signed in

        console.log("로그인이 성공했어요");
        console.log("userCredential : ", userCredential);
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log("로그인이 실패했어요 ");
        console.log("error : ", error);

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
      <div className={classes.topSection}>
        <BackButton />
      </div>
      <div className={classes.middleSection}>
        <h1 className={classes.title}>로그인 페이지</h1>
        <p className={classes.text}> 만나서 반가워요! </p>
      </div>

      <form className={classes.middleSection}>
        <div>
          email : <input type="email" onChange={emailTypingHandler} id="loginEmail" />
        </div>
        <div>
          password : <input type="password" onChange={passwordTypingHandler} id="loginPassword" />
        </div>
        <button type="submit" onClick={loginHandler} id="loginButton">
          로그인 하기
        </button>
      </form>
    </>
  );
}
