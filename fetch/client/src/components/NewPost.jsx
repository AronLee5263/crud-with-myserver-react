import classes from "./NewPost.module.css";

function NewPost() {
  function changeBodyHandler(event) {
    console.log(event.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="postContent">Text</label>
        <textarea
          id="postContent"
          required
          rows={3}
          onChange={changeBodyHandler}
        />
      </p>
      <p>
        <label htmlFor="postAuthor">Your name</label>
        <input id="postAuthor" required type="text" />
      </p>
    </form>
  );
}

export default NewPost;
