const { connect } = require("mongoose");

// connect("mongodb://localhost:27017/synechron-db")
connect(
  "mongodb+srv://thetestuser:zIgYdYq24SJyI5yf@theatlascluster.e9xsq.mongodb.net/todo-db?retryWrites=true&w=majority&appName=TheAtlasCluster"
)
  .then(() => console.log("Mongo Connected!"))
  .catch(console.error);
