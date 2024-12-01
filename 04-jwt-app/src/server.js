const express = require("express");
const { sign, verify } = require("jsonwebtoken");

const SUPER_SECRET_KEY = "MY_SECRET_KEY";

const app = express();

app.use(express.json());

function ensureToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.send({ errorMessage: "Authentication required" });
  }
  const token = authHeader.split(" ")[1]; // "Bearer <TOKEN>" => ["Bearer", "TOKEN"]
  req.token = token;
  next();
}

app.get("/api/public", (req, res) => {
  res.send({ message: "Public API" });
});

app.get("/api/protected", ensureToken, (req, res) => {
  const { username } = verify(req.token, SUPER_SECRET_KEY);
  console.log("TOKEN USER : ", username);
  res.send({ message: "Protected API accessed by " + username });
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "john@test" && password === "john123") {
    const token = sign({ username }, SUPER_SECRET_KEY);
    return res.send({ token });
  } else {
    return res.send({ error: "Bad Credentials" });
  }
});

app.listen(9090, () => console.log("Express server running on PORT: 9090"));
