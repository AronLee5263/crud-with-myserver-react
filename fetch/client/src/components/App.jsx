import { useEffect, useState } from "react";

import classes from "./App.module.css";

import MainHeader from "./Mainheader";
import CrudButtons from "./CrudButtons";
import UnderMainHeader from "./UnderMainHeader";

const SERVER_URL = "";
// 브랜치 테스트

function App() {
  return (
    <>
      <CrudButtons />
      <MainHeader />
      <UnderMainHeader />
    </>
  );
}

export default App;

/* 리액트 공식문서에 따라서 구조변경
12번 react로 생각하기 과정대로 하기 
https://ko.legacy.reactjs.org/docs/thinking-in-react.html
*/
