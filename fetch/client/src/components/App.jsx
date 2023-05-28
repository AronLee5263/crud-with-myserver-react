import { useEffect, useState } from "react";

import classes from "./App.module.css";

import MainHeader from "./Mainheader";
import CrudButtons from "./CrudButtons";
import UnderMainHeader from "./UnderMainHeader";

const SERVER_URL = "";
// 5.28 라우터 삭제하기 전에 원래 메인 브랜치 내용 입니다.
// 지금부터는 이 브랜치에 메인 내용을 전부 담아 놓을거고 실제 메인 브랜치에서는 맥스 프로젝트 참고해서 시작

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
