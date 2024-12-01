const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("./package.json");
const writeStream = createWriteStream("./test.json");

// readStream.on("data", (data) => {
//   console.log(data.toString());
//   writeStream.write(data, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File created");
//     }
//   });
// });

readStream.pipe(writeStream);

// Request -> Readable Stream
// Response -> Writeable Stream

// readStream.pipe(response); // Download Server
// request.pipe(writeStream); // Upload Server
