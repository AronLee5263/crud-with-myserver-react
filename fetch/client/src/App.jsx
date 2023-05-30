import { useState } from "react";
import classes from "./App.module.css";

// import CrudButtons from "./components/CrudButtons";
// import Create from "./routes/Create";

import MainHeader from "./components/Mainheader";
import PostsList from "./components/PostsList";

const SERVER_URL = "";
// 브랜치 테스트

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function closeModalHandler() {
    setModalIsVisible(false);
  }

  function openModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onOpenModal={openModalHandler} />
      <main>
        <PostsList
          isEditing={modalIsVisible}
          onCloseModal={closeModalHandler}
        />
      </main>
    </>
  );
}

export default App;

/* 리액트 공식문서에 따라서 구조변경
12번 react로 생각하기 과정대로 하기 
https://ko.legacy.reactjs.org/docs/thinking-in-react.html
*/
