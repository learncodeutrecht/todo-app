var http = require('http'),
    fs = require('fs'),
    express = require('express');

app = express();

app.use("/", express.static(__dirname + "/static"))

app.get('/test', function (req, res) {
  res.send('Hello World!')
})

//this maps http://localhost:8080/todo to the callback functions passed
//so if you send a Post request to /todo you get a response of "Add Todo"
//these should be called from main.js 
//get to load the data and the others to modify it 
app.route("/todo")
  //CREATE
  .post(function (req, res) {
    res.send('Add Todo')
  })
  //READ
  .get(function (req, res) {
  res.send('show todos')
  })
  //UPDATE
  .put(function (req, res) {
    res.send('Update the Todo')
  })
  //DELETE
  .delete(function (req, res) {
  res.send('Got a DELETE request at /todo')
  })

/*app.get('/', function(req, res){
  var stream = fs.createReadStream('index.html');
  stream.pipe(res);
});
*/
app.listen(8080);

console.log("Please go to http://localhost:8080/");