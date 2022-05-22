const http = require('http');
const { readFileSync } = require('fs');

//get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyle = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { "content-type": "text/html" })
        // console.log('user hit the server');
        res.write(homePage);
        res.end();
    }
    else if (url === '/about') {
        res.writeHead(200, { "content-type": "text/html" })
        // console.log('user hit the server');
        res.write("<h1>About Page</h1>");
        res.end();
    }
    else if (url === "/styles.css") {
        res.writeHead(200, { "content-type": "text/css" })
        // console.log('user hit the server');
        res.write(homeStyle);
        res.end();
    }
    else if (url === "/logo.svg") {
        res.writeHead(200, { "content-type": "image/svg+xml" })
        // console.log('user hit the server');
        res.write(homeImage);
        res.end();
    }
    else if (url === "/browser-app.js") {
        res.writeHead(200, { "content-type": "text/javascript" })
        // console.log('user hit the server');
        res.write(homeLogic);
        res.end();
    }     
    else {
        res.writeHead(404, { "content-type": "text/html" })
        // console.log('user hit the server');
        res.write("<h1>page not found</h1>");
        res.end();
    }
})

server.listen(5001);