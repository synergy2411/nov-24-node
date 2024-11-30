const { todoCollection } = require("../db");

const getAllTodos = (req, res) => {
  res.send(todoCollection);
};

const getSingleTodo = (req, res) => {
  const { todoId } = req.params;
  const position = todoCollection.findIndex((todo) => todo.id === todoId);
  if (position === -1) {
    return res.sendStatus(404);
  } else {
    return res.send(todoCollection[position]);
  }
};

const createTodo = (req, res) => {
  todoCollection.push({
    id: "t00" + (todoCollection.length + 1),
    title: req.body.title,
    status: false,
  });
  res.sendStatus(201);
};

const deleteTodo = (req, res) => {
  const { todoId } = req.params;
  const position = todoCollection.findIndex((todo) => todo.id === todoId);
  if (position === -1) {
    return res.sendStatus(400);
  } else {
    const [deletedItem] = todoCollection.splice(position, 1);
    return res.send(deletedItem);
    // return res.sendStatus(204)
  }
};

const updateTodo = (req, res) => {
  const { todoId } = req.params;
  const { title, status } = req.body;
  const position = todoCollection.findIndex((todo) => todo.id === todoId);
  if (position === -1) {
    return res.sendStatus(400);
  } else {
    if (typeof title === "string") {
      todoCollection[position].title = title;
    }
    if (typeof status === "boolean") {
      todoCollection[position].status = status;
    }
    return res.send({ message: "updated" });
  }
};

module.exports = {
  getAllTodos,
  getSingleTodo,
  createTodo,
  deleteTodo,
  updateTodo,
};
