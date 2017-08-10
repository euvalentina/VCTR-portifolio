var bodyParser = require('body-parser');
var express = require('express');
var php = require("node-php");
var path = require("path");
var http = require('http');

var app = express();
var server = http.createServer(app);

//app.use("/", php.cgi("/"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'mountain-king-html')));

//var routes = require('./routes/routes.js')(app);


//app.listen(1337);
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Te AMO LINDA");
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
