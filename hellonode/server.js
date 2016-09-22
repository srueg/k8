var os = require("os");
var http = require('http');
var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello Kubernetes World!\nServed from: '+os.hostname());
};
var www = http.createServer(handleRequest);
www.listen(8080);
