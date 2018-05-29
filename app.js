var express = require ('express');
var path    = require("path");

var server = express();
server.use(express.static(__dirname+'/static'))

server.get('/',(req,res) => {
    res.sendFile(path.join(__dirname+'/static/index.html'));
}) 

server.listen(3000);

