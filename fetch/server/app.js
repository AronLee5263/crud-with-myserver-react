const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World 서버 돌아가?");
});

app.listen(3000, () => {
  console.log("Server start 시작했어");
});
