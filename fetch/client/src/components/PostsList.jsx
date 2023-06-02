import { useState, useEffect } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import MoreModal from "./MoreModal";
import MoreList from "./MoreList";

import axios from "axios";

import classes from "./PostsList.module.css";
const SERVER_URL = "https://64637a9f7a9eead6fae801e2.mockapi.io/fakeData";

export default function PostsList({ isEditing, onCloseModal }) {
  const [posts, setPosts] = useState([]);
  const [moreModalIsVisible, setmoreModalIsVisible] = useState(false);

  function moreCloseModalHandler() {
    setmoreModalIsVisible(false);
  }

  function moreOpenModalHandler() {
    setmoreModalIsVisible(true);
  }

  useEffect(() => {
    async function axiosPosts() {
      try {
        await axios.get(SERVER_URL).then((response) => {
          console.log("response.data : ", response.data);
          setPosts(response.data.reverse());
        });
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

  return (
    <>
      {isEditing ? (
        <Modal onClose={onCloseModal}>
          <NewPost onCancelButton={onCloseModal} onAddPost={addPostHandler} />
        </Modal>
      ) : null}

      {moreModalIsVisible && (
        <MoreModal onCloseMoreModal={moreCloseModalHandler}>
          <MoreList onCancelButton={moreCloseModalHandler} />
        </MoreModal>
      )}

      {/* MoreModal 컴포넌트 코드위치가 중요함.
      Post 컴포넌트가 map 함수로 렌더링 되기전에 렌더링 되어야함 */}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.reverse().map((post, i) => (
            <Post
              key={i}
              author={post.author}
              body={post.body}
              onOpenMoreModal={moreOpenModalHandler}
            />
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
