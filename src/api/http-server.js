import http from 'http';

var server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'textplain'
  });
  response.end('Hello World\n');
});

server.listen(8080);