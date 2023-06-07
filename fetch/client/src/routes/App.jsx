import { useState } from "react";
import classes from "./App.module.css";

// import CrudButtons from "./components/CrudButtons";
// import Create from "./routes/Create";

import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";

const SERVER_URL = "";

function App() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default App;

/* 리액트 공식문서에 따라서 구조변경
12번 react로 생각하기 과정대로 하기 
https://ko.legacy.reactjs.org/docs/thinking-in-react.html
*/
