var express = require("express"),
    app = express(),
    compression = require('compression'),
    path = require('path');

var port = process.env.PORT || 8080;
var host = process.env.IP || "localhost";
var oneDay = 86400000;

app.use(compression());
app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public', { maxAge: oneDay }));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/public' + '/index.html'));
});

app.listen(port, host, function(){
    console.log("App running @host: " + host + " @port:" + port);
});

exports.app = app;