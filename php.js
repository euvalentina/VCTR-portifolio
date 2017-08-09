var express = require('express');
var php = require("node-php");
var path = require("path");

var app = express();

app.use("/", php.cgi("/"));

app.listen(3010);

console.log("Server listening!");
