const http = require('http');
const express = require('express')
const fs = require("fs");
const hostname = '127.0.0.1';
const port = 3000;
const app = express();
app.use(express.static('public'));
let html = fs.readFileSync("spider.html")

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  let url=req.url
  res.setHeader('Content-Type', 'text/html');
  res.end(html);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});