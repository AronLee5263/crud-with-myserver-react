import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost() {
  const [enteredContent, setEnteredContent] = useState("");

  function changeBodyHandler(event) {
    setEnteredContent(event.target.value);
  }

  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <p>
          <label htmlFor="postAuthor">이름</label>
          <input id="postAuthor" required type="text" />
        </p>
        <p>
          <label htmlFor="postContent">내용</label>
          <textarea
            id="postContent"
            required
            rows={3}
            onChange={changeBodyHandler}
          />
        </p>
        <p>{enteredContent}</p>

        <label>
          <input type="checkbox" name="myCheckbox" />
          <span className={classes.checkboxBody}>(필수) 서비스 이용약관</span>
        </label>
        <hr />
        <button type="reset">초기화</button>
        <button type="submit">저장</button>
      </form>
    </div>
  );
}

export default NewPost;
