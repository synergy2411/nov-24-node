const express = require("express");

const app = express();

app.get("/api", (req, res) => {
  res.send("Hello from Express!");
});

app.listen("9001", () => console.log("Express running on PORT : 9001"));

// http://localhost:9001/api
