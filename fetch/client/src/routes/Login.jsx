import classes from "./Login.module.css";

import BackButton from "../components/BackButton";

// import CrudButtons from "./components/CrudButtons";

export default function Login({
  emailTypingHandler,
  passwordTypingHandler,
  singUpHandler,
}) {
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
          email : <input type="email" onChange={emailTypingHandler} />
        </div>
        <div>
          password : <input type="password" onChange={passwordTypingHandler} />
        </div>
        <button type="submit" onClick={singUpHandler}>
          로그인 하기
        </button>
      </form>
    </>
  );
}
