// File Module
const { sum, getMyLuckyNumber } = require("./utils/maths");

// External Module
require("colors");
const yargs = require("yargs");

// Core Module
const { arch, cpus, totalmem, freemem } = require("os");

const { basename, extname, dirname } = require("path");

const { createServer } = require("http");

const server = createServer((request, response) => {
  response.write(JSON.stringify({ message: "Hello World" }));
  response.end();
});

server.listen(9000, () => console.log("Server started at PORT : 9000"));

// let urlPath = "http://www.domain.com/public/index.html";

// console.log(basename(urlPath));
// console.log(extname(urlPath));
// console.log(dirname(urlPath));

// console.log("Architecture : ", arch());

// console.log("Number of CPU's : ", cpus().length);

// console.log("Total Memory : ", totalmem());

// console.log("Free Memory : ", freemem());

// console.log("Sum : ", sum(2, 4));

// console.log("Lucky Number : ", getMyLuckyNumber());

// console.log("Success Message".green);

// console.log(yargs.argv);

// node filename.js --title="the node app"
