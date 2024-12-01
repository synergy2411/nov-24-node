const express = require("express");
const http = require("http");
const { join } = require("path");

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "/public/socket-client.html"));
});

io.on("connection", () => {
  console.log("Client connected...");
});

server.listen(9010, () => console.log("Socket server running on PORT: 9010"));
