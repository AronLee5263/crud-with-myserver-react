import classes from "./Login.module.css";
import { useState } from "react";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9k3CKV2ZFdwzQSEYgD_xmixxnDMUhHH0",
  authDomain: "disk-doctor-907ae.firebaseapp.com",
  projectId: "disk-doctor-907ae",
  storageBucket: "disk-doctor-907ae.appspot.com",
  messagingSenderId: "443173694206",
  appId: "1:443173694206:web:60c051ab38c3400ee6d3af",
  measurementId: "G-DK5B12QFY6",
};

import BackButton from "../components/BackButton";

// import CrudButtons from "./components/CrudButtons";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  function emailTypingHandler(e) {
    setEmail(e.target.value);
  }
  function passwordTypingHandler(e) {
    setPassword(e.target.value);
  }

  function loginHandler(event) {
    event.preventDefault();
    const auth = getAuth();
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
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
