import classes from "./FakeNewPost.module.css";

import { Link, Form } from "react-router-dom";

export default function FakeNewPost() {
  return (
    <Form className={classes.form}>
      <p className={classes.actions}>
        <Link className={classes.cancelButton}>취소</Link>
        <button type="submit">업로드</button>
      </p>
      <p>
        <label htmlFor="postAuthor">이름</label>
        <input required className={classes.postAuthor} type="text" />
      </p>
      <div>
        <label htmlFor="postContent">내용</label>
        <textarea className={classes.postContent} placeholder="무슨 일이 일어나고 있나요? " />
        <div className={classes.limitLetter}>200자 제한</div>
      </div>

      <p className={classes.checkBox}>
        <label>
          <input type="checkbox" name="myCheckbox" />
          <span>(필수) 서비스 이용약관</span>
        </label>
      </p>
    </Form>
  );
}
