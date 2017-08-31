
var mysql = require('mysql'); 
//todo move to settings
var host = "localhost";
var user= "root";
var password = "root";
var db = "todoapp";

exports.init = function(){
	console.log("start database init");

	var con = getconnnection(false);
	con.connect(function(err) {
	 	if (err) throw err;
	  	con.query("CREATE DATABASE "+db, function (err, result) {
		    if (err) throw err;
		    console.log("database created");
			con = getconnnection();
			con.query("CREATE TABLE todos (name VARCHAR(255), isdone BOOLEAN)",function(err, result){
				if (err) throw err;
		    	console.log("table created");
			}
			);
	  	});
});

	console.log("init done");
}


function getconnnection(database = true){
	if (database) {

		  return mysql.createConnection({
			host: host,
			user: user,
			password: password,
			database: db
		});
	}
	else{

		return mysql.createConnection({
				host: host,
				user: user,
				password: password,
		});
	}
}

