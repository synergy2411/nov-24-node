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
  } catch ({ message }) {
    return res.send(message);
  }
};

const getSingleTodo = async (req, res) => {
  try {
    const { todoId } = req.params;
    const foundItem = await TodoModel.findById(todoId);
    if (!foundItem) {
      return res.sendStatus(400);
    }
    return res.send(foundItem);
  } catch (err) {
    return res.send(err);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { todoId } = req.params;
    const deletedTodo = await TodoModel.findByIdAndDelete(todoId);
    if (!deletedTodo) {
      return res.sendStatus(400);
    }
    return res.sendStatus(204);
  } catch (err) {
    return res.send(err);
  }
};

const updateTodo = async (req, res) => {
  try {
    const { todoId } = req.params;
    const updatedTodo = await TodoModel.findByIdAndUpdate(todoId, req.body);
    if (!updatedTodo) {
      return res.sendStatus(400);
    }
    return res.send({ message: "successfully updated" });
  } catch (err) {
    return res.send(err);
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  getSingleTodo,
  deleteTodo,
  updateTodo,
};

// TodoModel.findById(id)

// TodoModel.findByIdAndUpdate() => Req.body + todoId
