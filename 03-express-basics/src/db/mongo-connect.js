const { connect } = require("mongoose");

// connect("mongodb://localhost:27017/synechron-db")
connect(
  "mongodb+srv://<username>:<password>@<cluster_address>/todo-db?retryWrites=true&w=majority&appName=TheAtlasCluster"
)
  .then(() => console.log("Mongo Connected!"))
  .catch(console.error);
