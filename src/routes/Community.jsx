import classes from "./Community.module.css";

// import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { db } from "../firebase/config";
import { collection, onSnapshot, getDocs, addDoc, query, orderBy } from "firebase/firestore";

import { UseCollection } from "../hooks/UseCollection";

// import Splash from "../components/Splash";
import PostsList from "../components/PostsList";

// const { documents: POSTS } = useCollection("POSTS");

export default function Community() {
  // const [doneSplash, setDoneSplash] = useState(false);

  // const [showSplash, setShowSplash] = useState(false);
  // const flagName = "hasShowSplash";

  // useEffect(() => {
  //   const hasShowSplash = localStorage.getItem(flagName);
  //   if (!hasShowSplash) {
  //     // Image has not been shown before
  //     setShowSplash(true);
  //     localStorage.setItem(flagName, true);
  //   }

  //   return () => {
  //     // Clear the flag when leaving the main page
  //     localStorage.removeItem(flagName);
  //   };
  // }, []);

  const { documents: docss } = UseCollection("POST");
  console.log("docss : ", docss);

  // async function loader() {
  //   console.log("docss : ", response.data);
  //   return docss.reverse();
  // }

  // const DOC = [...DOC, docss];

  // docss.map((post) => {
  //   const authorKey = Object.entries(post);
  //   const bodyKey = Object.entries(post);

  // })

  // post.id, post.author, post.body;

  // let results = [];
  // docss.forEach((item) => {
  //   results.push({ id: item.id, body: item.title });
  //   // console.log(results[1]);
  //   results.map((post) => {
  //     console.log("id :", post.id);
  //     console.log("body :", post.body);
  //   });
  // });

  return (
    <>
      {/* {showSplash && <Splash />} */}

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
