import { useEffect, useState } from "react";

import classes from "./App.module.css";

import CrudButtons from "./components/CrudButtons";
import Create from "./routes/Create";

import NewPost from "./components/NewPost";

const SERVER_URL = "";
// 브랜치 테스트

function App() {
  return (
    <>
      {/* <CrudButtons /> */}
      {/* <Create /> */}
      <NewPost />
      <Post author="정운" body="여기 출력" />
      <Post author="미민" body="미미미민" />
    </>
  );
}

export default App;

/* 리액트 공식문서에 따라서 구조변경
12번 react로 생각하기 과정대로 하기 
https://ko.legacy.reactjs.org/docs/thinking-in-react.html
*/
