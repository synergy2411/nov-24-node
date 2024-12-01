const EventEmitter = require("events").EventEmitter;
const emitter = new EventEmitter();

// Subscribing the event data
emitter.on("the-custome-event", (data) => {
  console.log("Data : ", data);
});

// Publishing the event
emitter.emit("the-custome-event", { message: "Hello World" });

process.on("uncaughtException", (error) => {
  console.log("Error Code : ", error);
  process.exit(1);
});

nonExistingFunctionCall();
