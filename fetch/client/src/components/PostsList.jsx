import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";

import classes from "./PostsList.module.css";

export default function PostsList({ isEditing, onCloseModal }) {
  return (
    <>
      {isEditing ? (
        <Modal onClose={onCloseModal}>
          <NewPost onCancelButton={onCloseModal} />
        </Modal>
      ) : null}

      <ul className={classes.posts}>
        {/* <Post author={enteredAuthor} body={enteredContent} /> */}
        <Post author="enteredAuthor" body="enteredContent" />
      </ul>
    </>
  );
}
