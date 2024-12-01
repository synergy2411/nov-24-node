const { TodoModel } = require("../model/todo-model");

const getAllTodos = async (req, res) => {
  try {
    const allTodos = await TodoModel.find();
    return res.send(allTodos);
  } catch (err) {
    return res.send(err);
  }
};

module.exports = { getAllTodos };
