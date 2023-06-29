import classes from "./FakeNewPost.module.css";

import { Link, Form } from "react-router-dom";

export default function FakeNewPost() {
  return (
    <Form className={classes.fakeForm}>
      <p className={classes.actions}>
        <Link className={classes.cancelButton}>취소</Link>
        <button type="button">업로드</button>
      </p>
      <p>
        <label htmlFor="fakePostAuthor">이름</label>
        <input id="fakePostAuthor" required className={classes.fakePostAuthor} placeholder="이름 " type="text" />
      </p>
      <div>
        <label htmlFor="fakePostContent">내용</label>
        <textarea
          id="fakePostContent"
          className={classes.fakePostContent}
          placeholder="fake 무슨 일이 일어나고 있나요? "
          rows={12}
        />
        <div className={classes.limitLetter}>200자 제한</div>
      </div>

      <p className={classes.checkBox}>
        <label htmlFor="fakeAgree">
          <input id="fakeAgree" type="checkbox" name="myCheckbox" />
          <span>(필수) 서비스 이용약관</span>
        </label>
      </p>
    </Form>
  );
}
