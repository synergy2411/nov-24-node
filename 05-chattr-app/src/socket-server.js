const express = require("express");
const http = require("http");
const { join } = require("path");

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "/public/socket-client.html"));
});

io.on("connection", (client) => {
  console.log("Client connected...");
  client.emit("acknowledge", { message: "You are connected now!" });
  client.on("message", (data) => {
    console.log(data.chatterName + " says - ", data.message);
    client.emit("reply", { chatterName: "Me", message: data.message });
    client.broadcast.emit("reply", data);
  });
});

server.listen(9010, () => console.log("Socket server running on PORT: 9010"));
