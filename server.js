var http = require('http'),
    fs = require('fs'),
    express = require('express');

app = express();

app.use("/", express.static(__dirname + "/static"))

/*app.get('/', function(req, res){
  var stream = fs.createReadStream('index.html');
  stream.pipe(res);
});
*/
app.listen(8080);

console.log("Please go to http://localhost:8080/");