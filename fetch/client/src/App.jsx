import { useState } from "react";

function App() {
  fetch("http://localhost:4000/api/todo")
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <div className="App">
      <h1>TODO LIST</h1>
    </div>
  );
}

export default App;
