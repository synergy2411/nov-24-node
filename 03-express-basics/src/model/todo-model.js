const { Schema, model } = require("mongoose");

const todoSchema = new Schema(
  {
    title: String,
    status: Boolean,
  },
  {
    versionKey: false,
  }
);

const TodoModel = model("todos", todoSchema);

module.exports = { TodoModel };
