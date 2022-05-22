const { createReadStream } = require("fs");

const stream = createReadStream("./content/first.txt", {highWaterMark:1});

stream.on("data", (result) => {
    console.log(result)
})