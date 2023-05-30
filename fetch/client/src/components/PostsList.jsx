import { useState } from "react";

import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";

import classes from "./PostsList.module.css";

export default function PostsList({ isEditing, onCloseModal }) {
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
      {isEditing ? (
        <Modal onClose={onCloseModal}>
          <NewPost
            onContentChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
            onCancelButton={onCloseModal}
          />
        </Modal>
      ) : null}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredContent} />
        <Post author={enteredAuthor} body={enteredContent} />
      </ul>
    </>
  );
}
