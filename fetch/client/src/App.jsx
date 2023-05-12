import { useEffect, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:5000/api/todo")
      .then((response) => response.json())
      .then((data) => setTodoList(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    fetch("http://localhost:5000/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        done,
      }),
    }).then(() => fetchData());
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
