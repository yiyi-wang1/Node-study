const { readFile, writeFile } = require('fs');

readFile("./content/first.txt", "utf8", (err, result) => {
    if (err) {
        console.error(err);
        return;
    }
    const first = result;
    readFile("./content/second.txt", "utf8", (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        const second = result;
        writeFile("./content/third.txt", `Here is a result: ${first}, ${second}`, (err, result) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(result);
        })
    })
})