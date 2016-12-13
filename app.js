var mysql = require("mysql");
var express = require('express');
var app = express();

//configure baisc resources
app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/style',  express.static(__dirname + '/style'));

//Binding express app to port 3000
app.listen(3000, function(){
    console.log('Node server running @ http://localhost:3000');
});

app.get('/',function(req,res){
    
    res.sendFile("home.html", {'root': __dirname+"/templates"});
});

app.get('/details',function(req,res){
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "battles"
    });
    var l = [];
    con.query('SELECT * FROM battles',function(err,rows){
      if(err) throw err;     
      res.send(JSON.stringify(rows));      
    });  
});

con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});