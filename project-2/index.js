let http = require("http")
let fs = require("fs")
const hostname = '127.0.0.1';
let server = http.createServer((req, res) => {
    let url = req.url    // get the url of the request
    if( url.split("/")[1] === "public" ) {
        handlePublic(url, req, res)    // run seperated code if the request contanis public/ in the first of it
    }
    else {
        // here the normal code for all other non public requests
        let html = fs.readFileSync("/spider.html")
        res.setHeader("Content-type", "text/html")
        res.statusCode = 200
        res.end(html)
    }
})

function handlePublic(url, req, res) {
    let file = fs.readFileSync("./" + url)  // which will send any file from public/
    res.end( file )
}

server.listen(3000, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  }); 
