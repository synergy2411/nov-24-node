const express = require("express");
const path = require("path");

const app = express();

app.use(express.json()); // Parsing the Request body
// app.use(express.urlencoded({ extended: false }));       // Parse the form data

let todoCollection = [
  { id: "t001", title: "buy new jeans", status: false },
  { id: "t002", title: "pot the plants", status: true },
  { id: "t003", title: "renew bike insurance", status: false },
  { id: "t004", title: "buy new carpet", status: true },
];

app.get("/api/todos", (req, res) => {
  res.send(todoCollection);
});

app.post("/api/todos", (req, res) => {
  todoCollection.push({
    id: "t00" + (todoCollection.length + 1),
    title: req.body.title,
    status: false,
  });
  res.sendStatus(201);
});

app.get("/api/todos/:todoId", (req, res) => {
  const { todoId } = req.params;
  const position = todoCollection.findIndex((todo) => todo.id === todoId);
  if (position === -1) {
    return res.sendStatus(404);
  } else {
    return res.send(todoCollection[position]);
  }
});

// app.get("/api", function (req, res) {
//   res.send({ message: "Hello Express!!" });
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// });

app.listen("9001", () => console.log("Express running on PORT : 9001"));

// http://localhost:9001/api
