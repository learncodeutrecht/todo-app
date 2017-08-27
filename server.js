var http = require('http')
,       fs = require('fs');


var server = http.createServer(function(req, res){
  var stream = fs.createReadStream('index.html');
  stream.pipe(res);
});
server.listen(8080);

console.log("Please go to http://localhost:8080/");