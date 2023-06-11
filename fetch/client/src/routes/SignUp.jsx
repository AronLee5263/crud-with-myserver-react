import classes from "./SignUp.module.css";

import BackButton from "../components/BackButton";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default function SignUp() {
  const firebaseConfig = {
    apiKey: "AIzaSyDi6OwgJMjlIeqCbOsUvNxvUtJRVo9kZtk",
    authDomain: "ddoclogin.firebaseapp.com",
    projectId: "ddoclogin",
    storageBucket: "ddoclogin.appspot.com",
    messagingSenderId: "778162457671",
    appId: "1:778162457671:web:2dbf7f3068026bf3073562",
    measurementId: "G-8QFY6D5ML2",
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <div className={classes.main}>
      <div className={classes.topSection}>
        <BackButton />
        <h1 className={classes.title}>회원가입 페이지</h1>
      </div>

      <form className={classes.middleSection}>
        <div>
          {" "}
          email : <input type="email" />{" "}
        </div>
        <div>
          password : <input type="password" />
        </div>
        <button type="submit">회원가입 하기</button>
      </form>

      <div className={classes.bottomSection}>
        <p className={classes.text}>
          지금 사람들이 어떻게 디스크를 관리하는지 알아보세요!
        </p>
      </div>
    </div>
  );
}
