const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('WELCOME to HOMEPAGE')
    }
    if (req.url === '/about') {
        res.end('WELCOME to ABOUT')
    }
    res.end(`<h1>Oops</h1> <p>Cannot find the page</p>`);

})

server.listen(5001);