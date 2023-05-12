import { useEffect, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/todo")
      .then((response) => response.json())
      .then((data) => setTodoList(data))
      .catch((error) => {
        console.error("에러 발생:", error);
      });
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.checked;
    fetch("http://localhost:5000/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        done,
      }),
    });
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="text" />
        <input name="text" type="checkbox" />
        <input type="submit" value="추가" />
      </form>

      {todoList?.map((todo) => {
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
