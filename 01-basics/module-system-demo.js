const { sum, getMyLuckyNumber } = require("./utils/maths");
require("colors");
const yargs = require("yargs");

console.log("Sum : ", sum(2, 4));

console.log("Lucky Number : ", getMyLuckyNumber());

console.log("Success Message".green);

console.log(yargs.argv);
