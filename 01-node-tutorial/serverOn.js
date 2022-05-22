const http = require('http');

const server = http.createServer();

//use Event Emitter API
server.on('request', (req, res) => {
    res.end('WELCOME to HOMEPAGE')
})
server.listen(5001);

// (req, res) => {
//     if (req.url === '/') {
        
//     }
//     if (req.url === '/about') {
//         res.end('WELCOME to ABOUT')
//     }
//     res.end(`<h1>Oops</h1> <p>Cannot find the page</p>`);
