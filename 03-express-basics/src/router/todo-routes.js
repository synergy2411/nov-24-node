const express = require("express");
const {
  getAllTodos,
  getSingleTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todo-controller");

const todoRouter = express.Router();

todoRouter.route("/").get(getAllTodos).post(createTodo);
todoRouter
  .route("/:todoId")
  .get(getSingleTodo)
  .delete(deleteTodo)
  .patch(updateTodo);

module.exports = { todoRouter };
