import { useEffect, useState } from "react";
import axios from "axios";

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
