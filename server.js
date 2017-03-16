var express = require('express');
var app = express();
app.use(express.static('public'));
app.set("view engine", "html");
app.set("views", "public");
//app.listen(process.env.PORT);
var config = require('./settings');
var red = require('node-red');
var http = require('http');
var server = http.createServer(app);
red.init(server, config);
app.use('/admin', red.httpAdmin);
app.use('/', red.httpNode);
app.get('*', function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});
server.listen(process.env.PORT);
red.start();