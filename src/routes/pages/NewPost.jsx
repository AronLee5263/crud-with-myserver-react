import classes from "./NewPost.module.css";

import React, { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import { Link, Form, redirect, useLocation, useNavigate } from "react-router-dom";

import FakeNewPost from "../../components/FakeNewPost";

export default function NewPost() {
  // const [bodyText, setBodyText] = useState("");

  // const [authorText, setAuthorText] = useState("");
  // const [newBody, setNewBody] = useState("");

  // function bodyTypingHandler(e) {
  //   setBodyText(e.target.value);
  // }
  // function authorTypingHandler(e) {
  //   setAuthorText(e.target.value);
  // }

  // const addPostHandler = async (e) => {
  //   e.preventDefault();
  //   const ref = collection(db, "POST");

  //   await addDoc(ref, {
  //     // posts:
  //   });

  //   setNewBody("");
  // };

  // const [test, setTest] = useState(localStorage.getItem("NewPost"));

  // const clickCancelBtnHandler = () => {
  //   localStorage.setItem("NewPost", "start");
  //   console.log("localStorage 정보는 : ", localStorage.getItem("NewPost"));
  // };

  // useEffect(() => {
  //   if (test === "start") {
  //     const timeoutId = setTimeout(() => {
  //       // localStorage.removeItem("NewPost");
  //     }, 1000);

  //     return () => {
  //       clearTimeout(timeoutId);
  //     };
  //   }
  // }, []);

  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // isClicked 가 true일떄만 실행되게 바로 리턴하는 패턴
    if (isClicked === false) return;

    const timeoutId = setTimeout(() => {
      setIsClicked(false);
      console.log("must be false after 0.1 second : ", isClicked);

      if (isClicked) {
        navigate("/");
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [isClicked]);

  const onClickCloseBtn = () => {
    setIsClicked(true);
  };

  return (
    <>
      {isClicked ? (
        <div className={classes.fakeNewPost}>
          <FakeNewPost />
        </div>
      ) : (
        <div className={classes.container}>
          <Form method="post" className={classes.form}>
            <p className={classes.actions}>
              <button type="button" className={classes.cancelButton} onClick={onClickCloseBtn}>
                취소
              </button>
              <button type="submit">업로드</button>
            </p>
            <p className={classes.nameInput}>
              <label htmlFor="postAuthor"></label>
              <input
                className={classes.postAuthor}
                id="postAuthor"
                name="postAuthor"
                required
                placeholder="이름"
                type="text"
              />
            </p>
            <div>
              <label htmlFor="postContent"></label>
              <textarea
                className={classes.postContent}
                id="postContent"
                name="postContent"
                required
                rows={12}
                placeholder="무슨 일이 일어나고 있나요?"
                maxLength={200}
              />
              <div className={classes.limitLetter}>200자 제한</div>
            </div>

            {/* <p className={classes.checkBox}>
              <label>
                <input type="checkbox" name="myCheckbox" />
                <span>(필수) 서비스 이용약관</span>
              </label>
            </p> */}
          </Form>
        </div>
      )}
    </>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  const ref = collection(db, "POST");

  await addDoc(ref, {
    author: postData.postAuthor,
    body: postData.postContent,
    createdAt: serverTimestamp(),
  });

  return redirect("/");
}

// export async function action({ request }) {
//   const formData = await request.formData();
//   const postData = Object.fromEntries(formData);
//   await axios.post(SERVER_URL, {
//     author: postData.postAuthor,
//     body: postData.postContent,
//   });

//   return redirect("/");
// }
