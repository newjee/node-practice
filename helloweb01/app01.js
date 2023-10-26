// 서버는 어떻게 만느나...

var http = require('http');

var server = http.createServer(function(req, res){
  console.log(req.url);
  

  res.writeHead(200, {
    'Content-Type': 'text/html'
  });

  res.end('<h1>Hello World</h1>');
});

server.listen(9090, function() {
  console.log('server starts...[9090]');

})