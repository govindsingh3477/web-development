const http = require('http');
const fs = require('fs')

// const text = fs.readFileSync('new.html')
 
const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./home.html')
const bookhub = fs.readFileSync('./project-2/spider.html')
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  url =req.url;
  res.setHeader('Content-Type', 'text/html');
  if(url=='/'){
    res.end(home);

  }
  else if(url =='/project-2/spider.html'){
    res.end(bookhub);

  }
  else
  {res.statusCode=404;
    res.end('404 not found ')

  }
  // res.end(bookhub)


});

 
server.listen(3000, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 