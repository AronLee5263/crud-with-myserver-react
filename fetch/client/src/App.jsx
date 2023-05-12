import { useEffect, useState } from "react";
import axios from "axios";

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
    <div className="App">
      <h1>TODO LIST</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="text" />
        <input name="done" type="checkbox" />
        <input type="submit" value="추가" />
      </form>

      {todoList?.map((todo) => {
        return (
          <div key={todo.id} style={{ display: "flex" }}>
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
  );
}

export default App;
