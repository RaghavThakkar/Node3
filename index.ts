import http from 'http'
import fs from 'fs'

const hostname = '127.0.0.1';
const port = 3000;

http.createServer
const server = http.createServer((req, res) => {
 
  res.setHeader('Content-Type', 'text/html');
  readFile(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function readFile(res:http.ServerResponse) {
  fs.readFile("index.1html",(err,data)=>{
    if(err!=null){
      res.writeHead(404,"File not found");
      res.end("File could not found");
      return;
    }

    res.writeHead(200);
    res.end(data);

  })
}