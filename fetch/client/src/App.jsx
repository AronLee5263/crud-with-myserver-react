import { useEffect, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/todo")
      .then((response) => response.json())
      .then((data) => setTodoList(data));
  }, []);

  return (
    <div>
      <h1>TODO LIST</h1>
      {todoList.map((todo) => {
        return (
          <div key={todo.id}>
            <div>{"id : " + todo.id}</div>
            <div>{"text : " + todo.text}</div>
            <div>{"done : " + todo.done ? "Yes" : "No"}</div>
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
