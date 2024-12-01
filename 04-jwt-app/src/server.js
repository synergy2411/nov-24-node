const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/public", (req, res) => {
  res.send({ message: "Public API" });
});

app.get("/api/protected", (req, res) => {
  res.send({ message: "Protected API" });
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "john@test" && password === "john123") {
    return res.send({ message: "Authenticated" });
  } else {
    return res.send({ error: "Bad Credentials" });
  }
});

app.listen(9090, () => console.log("Express server running on PORT: 9090"));
