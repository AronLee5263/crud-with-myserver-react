import classes from "./Community.module.css";

// import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { db } from "../../firebase/config";
import { collection, onSnapshot, getDocs, addDoc, query, orderBy } from "firebase/firestore";

import { UseCollection } from "../../hooks/UseCollection";

// import Splash from "../components/Splash";
import PostsList from "../../components/PostsList";

// const { documents: POSTS } = useCollection("POSTS");

export default function Community() {
  const { state } = useLocation();
  console.log("state 에 뭐가 있을까 : ", state);

  const { documents: docss } = UseCollection("POST");
  console.log("docss : ", docss);

  return (
    <>
      <button>ddddddd</button>
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

//   const { documents: docss } = useCollection("POST");

//   console.log("docss : ", docss);
//   return docss.reverse();
// }
