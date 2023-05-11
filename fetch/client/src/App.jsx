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
      {todoList.map((todo) => (
        <div key={todo.id}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ? "Yes" : "No"}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
