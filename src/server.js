var express = require("express");
var app = express();

var port = process.env.PORT || 8080;
var host = process.env.IP || "localhost";

app.get('/', function(req, res){
    res.json({});
});

app.listen(port, host, function(){
    console.log("App running @host: " + host + " @port:" + port);
});