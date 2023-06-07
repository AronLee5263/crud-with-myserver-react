import axios from "axios";
import { Link, Form, redirect } from "react-router-dom";

import Modal from "../components/Modal";

import classes from "./NewPost.module.css";

const SERVER_URL = "https://64637a9f7a9eead6fae801e2.mockapi.io/fakeData";

export default function NewPost() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p className={classes.actions}>
          <Link to=".." className={classes.cancelButton}>
            취소
          </Link>
          <button type="submit">업로드</button>
        </p>
        <p>
          <label htmlFor="postAuthor">이름</label>
          <input
            className={classes.postAuthor}
            id="postAuthor"
            name="postAuthor"
            required
            type="text"
          />
        </p>
        <p>
          <label htmlFor="postContent">내용</label>
          <textarea
            className={classes.postContent}
            id="postContent"
            name="postContent"
            required
            rows={12}
            placeholder="무슨 일이 일어나고 있나요?"
          />
        </p>

        <p className={classes.checkBox}>
          <label>
            <input type="checkbox" name="myCheckbox" />
            <span>(필수) 서비스 이용약관</span>
          </label>
        </p>
      </Form>
    </Modal>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await axios.post(SERVER_URL, {
    author: postData.postAuthor,
    body: postData.postContent,
  });

  return redirect("/");
}
