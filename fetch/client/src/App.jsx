import { useEffect, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/api/todo");
      const json = await response.json();
      setTodoList(json);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>TODO LIST</h1>
      {todoList.map((todo) => {
        return (
          <div key={todo.id}>
            <li>{"id : " + todo.id}</li>
            <li>{"text : " + todo.text}</li>
            <li>{"done : " + todo.done ? "Yes" : "No"}</li>
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
