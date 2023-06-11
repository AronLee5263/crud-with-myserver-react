import classes from "./SignUp.module.css";

import BackButton from "../components/BackButton";

// import CrudButtons from "./components/CrudButtons";

export default function SignUp() {
  return (
    <>
      <div className={classes.topSection}>
        <BackButton />
      </div>
      <div className={classes.middleSection}>
        <h1 className={classes.title}>회원가입 페이지</h1>

        <p className={classes.text}>
          지금 사람들이 어떻게 디스크를 관리하는지 알아보세요!
        </p>
      </div>
    </>
  );
}
