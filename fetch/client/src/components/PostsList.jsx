import { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";

import classes from "./PostsList.module.css";

export default function PostsList({ isEditing, onCloseModal }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isEditing ? (
        <Modal onClose={onCloseModal}>
          <NewPost onCancelButton={onCloseModal} onAddPost={addPostHandler} />
        </Modal>
      ) : null}

      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post key={post.body} author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  );
}
