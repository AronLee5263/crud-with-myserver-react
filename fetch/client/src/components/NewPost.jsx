import { useState } from "react";

import classes from "./NewPost.module.css";

function NewPost({ onCancelButton }) {
  const [enteredContent, setEnteredContent] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredContent(event.target.value);
  }

  function authorChangeHandler(e) {
    setEnteredAuthor(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    const postData = {
      author: enteredAuthor,
      body: enteredContent,
    };
    onCancelButton();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p className={classes.actions}>
        <button type="button" onClick={onCancelButton}>
          취소
        </button>
        <button type="submit">업로드</button>
      </p>
      <p>
        <label htmlFor="postAuthor">이름</label>
        <input
          className={classes.postAuthor}
          id="postAuthor"
          required
          type="text"
          onChange={authorChangeHandler}
        />
      </p>
      <p>
        <label htmlFor="postContent">내용</label>
        <textarea
          className={classes.postContent}
          id="postContent"
          required
          rows={12}
          placeholder="무슨 일이 일어나고 있나요?"
          onChange={bodyChangeHandler}
        />
      </p>

      <p className={classes.checkBox}>
        <label>
          <input type="checkbox" name="myCheckbox" />
          <span>(필수) 서비스 이용약관</span>
        </label>
      </p>
    </form>
  );
}

export default NewPost;
