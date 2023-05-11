const express = require("express");
const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

let id = 2;
const todoList = [
  {
    id: 1,
    text: "밥먹기",
    done: false,
  },
];

app.get("/", function (req, res) {
  res.send("Hello World 서버 돌아가?");
});

app.get("/api/todo", () => {
  return todoList;
});

app.post("/api/todo", (req, res) => {
  const { text, done } = req.body;
});

app.listen(3000, () => {
  console.log("Server start 시작했어");
});
