import { useEffect, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

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
    const done = isChecked;
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

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="text" />
        <input
          name="checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <input type="submit" value="추가" />
      </form>

      {todoList?.map((todo) => {
        return (
          <div key={todo.id}>
            <li>{"id : " + todo.id}</li>
            <li>{"text : " + todo.text}</li>
            <li>{"done : " + (todo.done ? "Yes" : "No")}</li>
            {/*바로 윗줄 (todo.done ? "Yes" : "No") 괄호문제  */}
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
