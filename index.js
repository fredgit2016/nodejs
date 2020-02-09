const express = require('express');
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1><p>This is the contents of the aboutus.html file</p></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () =>{
    console.log(`Server runnning at http://${hostname}:${port}`);
})