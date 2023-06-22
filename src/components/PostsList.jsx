import classes from "./PostsList.module.css";

import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

import { useState, useEffect } from "react";
// import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import MorePopup from "./MorePopup";
import MoreList from "./MoreList";

import axios from "axios";

const SERVER_URL = "https://64637a9f7a9eead6fae801e2.mockapi.io/fakeData";

export default function PostsList({ posts }) {
  // const posts = useLoaderData();
  const [popupIsVisible, setPopupIsVisible] = useState(false);

  // function closePopupHandler() {
  //   setPopupIsVisible(false);
  // }

  // function openPopupHandler() {
  //   setPopupIsVisible(true);
  // }

  const deleteHandler = async (id) => {
    console.log(id);
    const ref = doc(db, "POST", id);
    await deleteDoc(ref);
  };

  let postContent;

  if (posts.length > 0) {
    postContent = (
      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            author={post.author}
            body={post.body}
            onOpenPopup={(e) => setPopupIsVisible(true)}
            onClickDeletePost={deleteHandler}
            onDeletePost={deleteHandler}
          />
        ))}
      </ul>
    );
  } else if (posts.length === 0) {
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
  }

  return (
    <>
      {popupIsVisible && (
        <MorePopup onClosePopup={(e) => setPopupIsVisible(false)}>
          <MoreList onCancelButton={(e) => setPopupIsVisible(false)} />
        </MorePopup>
      )}

      {/* MoreModal 컴포넌트 코드위치가 중요함.
      Post 컴포넌트가 map 함수로 렌더링 되기전에 렌더링 되어야함 */}

      {postContent}
    </>
  );
}
