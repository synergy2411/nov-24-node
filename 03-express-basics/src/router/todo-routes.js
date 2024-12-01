const express = require("express");
const {
  getAllTodos,
  getSingleTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todo-controller");

const todoMongoController = require("../controller/todo-mongo-controller");

const todoRouter = express.Router();

todoRouter
  .route("/")
  .get(todoMongoController.getAllTodos)
  .post(todoMongoController.createTodo);
todoRouter
  .route("/:todoId")
  .get(todoMongoController.getSingleTodo)
  .delete(deleteTodo)
  .patch(updateTodo);

module.exports = { todoRouter };
