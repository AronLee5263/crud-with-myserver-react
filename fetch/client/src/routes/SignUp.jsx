import classes from "./SignUp.module.css";

import BackButton from "../components/BackButton";

// import CrudButtons from "./components/CrudButtons";

export default function SignUp() {
  return (
    <div className={classes.main}>
      <div className={classes.topSection}>
        <BackButton />
        <h1 className={classes.title}>회원가입 페이지</h1>
      </div>
      <div className={classes.middleSection}>
        <div>
          {" "}
          email : <input type="email" />{" "}
        </div>
        <div>
          password : <input type="password" />
        </div>
        <button type="submit">회원가입 하기</button>
      </div>

      <div className={classes.bottomSection}>
        <p className={classes.text}>
          지금 사람들이 어떻게 디스크를 관리하는지 알아보세요!
        </p>
      </div>
    </div>
  );
}
