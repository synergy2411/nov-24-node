const express = require("express");
const path = require("path");

const app = express();

let todoCollection = [
  { id: "t001", title: "buy new jeans", status: false },
  { id: "t002", title: "pot the plants", status: true },
  { id: "t003", title: "renew bike insurance", status: false },
  { id: "t004", title: "buy new carpet", status: true },
];

app.get("/api/todos", (req, res) => {
  res.send(todoCollection);
});

// app.get("/api", function (req, res) {
//   res.send({ message: "Hello Express!!" });
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// });

app.listen("9001", () => console.log("Express running on PORT : 9001"));

// http://localhost:9001/api
