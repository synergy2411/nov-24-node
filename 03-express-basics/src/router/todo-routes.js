const express = require("express");
const {
  getSingleTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todo-controller");

const { getAllTodos } = require("../controller/todo-mongo-controller");

const todoRouter = express.Router();

todoRouter.route("/").get(getAllTodos).post(createTodo);
todoRouter
  .route("/:todoId")
  .get(getSingleTodo)
  .delete(deleteTodo)
  .patch(updateTodo);

module.exports = { todoRouter };
