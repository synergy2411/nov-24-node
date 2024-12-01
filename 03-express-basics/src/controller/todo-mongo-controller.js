const { TodoModel } = require("../model/todo-model");

const getAllTodos = async (req, res) => {
  try {
    const allTodos = await TodoModel.find();
    return res.send(allTodos);
  } catch (err) {
    return res.send(err);
  }
};

const createTodo = async (req, res) => {
  try {
    const newTodo = new TodoModel(req.body);
    const createdTodo = await newTodo.save();
    console.log(createdTodo);
    res.sendStatus(201);
  } catch (err) {
    return res.send(err);
  }
};

module.exports = { getAllTodos, createTodo };
