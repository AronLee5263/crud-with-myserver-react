import { useEffect, useState } from "react";
import axios from "axios";

import classes from "./App.module.css";

const SERVER_URL = "http://localhost:5000/api/todo";

function App() {
  const [todoList, setTodoList] = useState([]);

  const axiosData = async () => {
    const response = await axios.get(SERVER_URL);
    setTodoList(response.data);
  };

  useEffect(() => {
    axiosData();
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    await axios.post(SERVER_URL, { text, done });
    axiosData();
  };

  return (
    <>
      <div className={classes.header_container}>
        <h1>React CRUD with axios</h1>
      </div>
      <div className={classes.form_container}>
        <form onSubmit={onSubmitHandler}>
          <input name="text" />
          <input name="done" type="checkbox" />
          <input type="submit" value="추가" />
        </form>
      </div>

      <div className={classes.main_contents}>
        {todoList?.map((todo) => {
          return (
            <div className={classes.content_container} key={todo.id}>
              <div>{"id : " + todo.id}</div>
              <div>{"text : " + todo.text}</div>
              <div>{"done : " + (todo.done ? "Yes" : "No")}</div>
              <div>
                <br />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
