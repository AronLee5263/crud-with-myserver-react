import { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";

import axios from "axios";

import classes from "./PostsList.module.css";

export default function PostsList({ isEditing, onCloseModal }) {
  const [posts, setPosts] = useState([]);

  const SERVER_URL = "https://64637a9f7a9eead6fae801e2.mockapi.io/fakeData";

  function addPostHandler(postData) {
    axios
      .post(SERVER_URL, {
        name: postData.author,
        content: postData.body,
      })
      .then(() => {
        console.log(postData);
      });

    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isEditing ? (
        <Modal onClose={onCloseModal}>
          <NewPost onCancelButton={onCloseModal} onAddPost={addPostHandler} />
        </Modal>
      ) : null}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div
          style={{
            marginTop: "50px",
            textAlign: "center",
            color: "black",
          }}
        >
          <h2>게시글이 없어요</h2>
          <p> 내용을 추가해보세요 🙂</p>
        </div>
      )}
    </>
  );
}
