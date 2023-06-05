import { useState, useEffect } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import MorePopup from "./MorePopup";
import MoreList from "./MoreList";

import axios from "axios";

import classes from "./PostsList.module.css";
const SERVER_URL = "https://64637a9f7a9eead6fae801e2.mockapi.io/fakeData";

export default function PostsList({ isEditing, onCloseModal }) {
  const [posts, setPosts] = useState([]);
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  function closePopupHandler() {
    setPopupIsVisible(false);
  }

  function openPopupHandler() {
    setPopupIsVisible(true);
  }

  useEffect(() => {
    async function axiosPosts() {
      try {
        setIsFetching(true);
        const response = await axios.get(SERVER_URL);
        console.log("response.data : ", response.data);
        setPosts(response.data.reverse());
        setIsFetching(false);
      } catch (error) {
        console.log(error);
      }
    }

    axiosPosts();
  }, []);

  function addPostHandler(postData) {
    axios.post(SERVER_URL, {
      author: postData.author,
      body: postData.body,
    });

    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  let postContent;

  if (!isFetching && posts.length > 0) {
    postContent = (
      <ul className={classes.posts}>
        {posts.reverse().map((post, i) => (
          <Post
            key={i}
            author={post.author}
            body={post.body}
            onOpenPopup={openPopupHandler}
          />
        ))}
      </ul>
    );
  } else if (!isFetching && posts.length === 0) {
    postContent = (
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
    );
  } else if (isFetching) {
    postContent = (
      <div style={{ textAlign: "center", color: "black" }}>
        <p>로딩중이에요</p>
      </div>
    );
  }

  return (
    <>
      {isEditing ? (
        <Modal onClose={onCloseModal}>
          <NewPost onCancelButton={onCloseModal} onAddPost={addPostHandler} />
        </Modal>
      ) : null}

      {popupIsVisible && (
        <MorePopup onClosePopup={closePopupHandler}>
          <MoreList onCancelButton={closePopupHandler} />
        </MorePopup>
      )}

      {/* MoreModal 컴포넌트 코드위치가 중요함.
      Post 컴포넌트가 map 함수로 렌더링 되기전에 렌더링 되어야함 */}

      {postContent}
    </>
  );
}
