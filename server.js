var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    mysql = require('mysql'),
    user = "root",
    password = "root",
    host = "localhost",
    db = "todoapp",
    connection = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: db
    });
connection.connect(function (err) {
    if (err) {
        console.log("Database connect error");
    }
});


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
//CREATE a todo
    .post(function (req, res) {
        res.send('Add Todo')
    })
//READ get all todos
    .get(function (req, res) {
        connection.query("select * from todos", function(err, results, fields){
            res.send(JSON.stringify(results));
            console.log(results);
        });
    })


app.route("/todo/:id")
//READ get a specific todo
    .get(function (req, res) {
        connection.query("select * from todos where id=" + req.params.id,
            function(err, results, fields){
                res.send(JSON.stringify(results));
            });
    })
//UPDATE a todo
    .put(function (req, res) {
        res.send('Update the Todo:'+ req.params.id)
    })
//DELETE
    .delete(function (req, res) {
        res.send('delete todo :'+ req.params.id)
    })

/*app.get('/', function(req, res){
  var stream = fs.createReadStream('index.html');
  stream.pipe(res);
});
*/
app.listen(8080);

console.log("Please go to http://localhost:8080/");