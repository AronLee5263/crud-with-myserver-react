import { useState, useEffect } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";

import axios from "axios";

import classes from "./PostsList.module.css";
const SERVER_URL = "https://64637a9f7a9eead6fae801e2.mockapi.io/fakeData";

export default function PostsList({ isEditing, onCloseModal }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function axiosPosts() {
      await axios.get(SERVER_URL).then((response) => {
        setPosts(response.data.reverse());
      });
    }

    axiosPosts();
  }, []);

  function addPostHandler(postData) {
    axios.post(SERVER_URL, {
      author: postData.author,
      body: postData.body,
    });

    // 보내는건 성공했고 이제 백엔드에서 가져와야함.

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
          {posts.reverse().map((post) => (
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
