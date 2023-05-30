import classes from "./NewPost.module.css";

function NewPost(props) {
  return (
    <form className={classes.form}>
      <p className={classes.actions}>
        <button type="reset">취소</button>
        <button type="submit">업로드</button>
      </p>
      <p>
        <label htmlFor="postAuthor">이름</label>
        <input
          className={classes.postAuthor}
          id="postAuthor"
          required
          type="text"
          onChange={props.onAuthorChange}
        />
      </p>
      <p>
        <label htmlFor="postContent">내용</label>
        <textarea
          className={classes.postContent}
          id="postContent"
          required
          rows={9}
          placeholder="무슨 일이 일어나고 있나요?"
          onChange={props.onContentChange}
        />
      </p>

      <label>
        <input type="checkbox" name="myCheckbox" />
        <span className={classes.checkboxBody}>(필수) 서비스 이용약관</span>
      </label>
    </form>
  );
}

export default NewPost;
