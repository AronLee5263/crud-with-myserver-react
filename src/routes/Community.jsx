import classes from "./Community.module.css";

import { Outlet } from "react-router-dom";

import { db } from "../firebase/config";
import { collection, onSnapshot, getDocs, addDoc, query, orderBy } from "firebase/firestore";

import { UseCollection } from "../hooks/UseCollection";

import PostsList from "../components/PostsList";

const SERVER_URL = "https://64637a9f7a9eead6fae801e2.mockapi.io/fakeData";

// const { documents: POSTS } = useCollection("POSTS");

export default function Community() {
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
