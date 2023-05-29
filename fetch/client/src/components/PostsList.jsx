import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";

import classes from "./PostsList.module.css";

export default function PostsList() {
  const [enteredContent, setEnteredContent] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredContent(event.target.value);
  }

  function authorChangeHandler(e) {
    setEnteredAuthor(e.target.value);
  }

  return (
    <>
      <NewPost
        onContentChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredContent} />
        <Post author={enteredAuthor} body={enteredContent} />
      </ul>
    </>
  );
}
