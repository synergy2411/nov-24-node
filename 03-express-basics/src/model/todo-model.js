const { Schema, model } = require("mongoose");

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: Boolean,
      default: false,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);

todoSchema.pre("save", () => {
  console.log("PRE SAVE MIDDLEWARE ADDED");
});

todoSchema.post("init", () => {
  console.log("POST INITIALIZATION MIDDLEWARE");
});

const TodoModel = model("todos", todoSchema);

module.exports = { TodoModel };
