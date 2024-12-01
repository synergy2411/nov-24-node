const express = require("express");
const path = require("path");
require("./db/mongo-connect");
const { todoRouter } = require("./router/todo-routes");

const app = express();

app.use(express.json()); // Parsing the Request body
// app.use(express.urlencoded({ extended: false }));       // Parse the form data

app.use("/api/todos", todoRouter);

// app.get("/api/todos", );

// app.post("/api/todos", );

// app.get("/api/todos/:todoId", );

// app.delete("/api/todos/:todoId", );

// app.patch("/api/todos/:todoId", );

// app.get("/api", function (req, res) {
//   res.send({ message: "Hello Express!!" });
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// });

app.listen("9001", () => console.log("Express running on PORT : 9001"));

// http://localhost:9001/api
