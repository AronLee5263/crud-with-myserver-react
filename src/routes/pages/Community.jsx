import classes from "./Community.module.css";

import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { db } from "../../firebase/config";
import { collection, onSnapshot, getDocs, addDoc, query, orderBy } from "firebase/firestore";

import { useCollectionnn } from "../../hookss/useCollectionnn";

// import Splash from "../components/Splash";

import { useAuthContext } from "../../store/useAuthContext";
import NotLogin from "./NotLogin";

import PostsList from "../../components/PostsList";
import FakeNewPost from "../../components/FakeNewPost";

// const { documents: POSTS } = useCollectionnn("POSTS");

export default function Community() {
  const { user, authIsReady } = useAuthContext();
  const navigate = useNavigate();

  // const { state } = useLocation();
  // console.log("state 에 뭐가 있을까 : ", state);

  const { documents: docss } = useCollectionnn("POST");
  console.log("docss : ", docss);

  // console.log("test : ", test);

  // const [test, setTest] = useState(localStorage.getItem("NewPost"));

  // console.log("취소후 localStorage 정보는 : ", localStorage.getItem("NewPost"));
  // if (test === "start") {
  //   return (
  //     <>
  //       <PostsList posts={docss} />
  //       <div className={classes.fakeNewPost}>
  //         <FakeNewPost />
  //       </div>
  //     </>
  //   );
  // }

  useEffect(() => {
    if (authIsReady && !user) {
      navigate("/not_login");
    }
  }, [authIsReady, user, navigate]);

  return (
    <>
      <Outlet />
      <main>
        {/* {firebasePosts ? <PostsList db={firebasePosts} /> : <PostsList />} */}
        <PostsList posts={docss} />
        {/* <PostsList /> */}
      </main>
    </>
  );
}

// export async function loader() {
//   const response = await axios.get(SERVER_URL);
//   console.log("response.data : ", response.data);
//   return response.data.reverse();
// }

// export async function fetchPosts() {
//   const todoListRef = collection(db, "POST");
//   const querySnapshot = await getDocs(todoListRef);
//   const todoList = querySnapshot.docs.map((doc) => doc.data());
//   return todoList;
// }

// export async function loader() {
//   const response = await axios.get(SERVER_URL);

//   const { documents: docss } = useCollectionnn("POST");

//   console.log("docss : ", docss);
//   return docss.reverse();
// }
