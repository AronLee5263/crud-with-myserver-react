import { useEffect, useState } from "react";

import BackButton from "../components/BackButton";

import classes from "./Read.module.css";
import axios from "axios";

const SERVER_URL = "https://64637a9f7a9eead6fae801e2.mockapi.io/:fakeData";

export default function Read() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(SERVER_URL).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  return (
    <>
      <div className={classes.header_container}>
        <h1>React CRUD with axios</h1>
      </div>
      <div className={classes.component_name}> Read Component</div>

      <BackButton />

      <div className={classes.form_container}>
        <form>
          <input name="text" placeholder="내용을 입력하세요..." required />
          <input name="done" type="checkbox" />
          <input type="submit" value="추가" />
        </form>
      </div>

      <div className={classes.Posts}>
        <div>
          <TableSemantic />
        </div>
      </div>
    </>
  );
}
