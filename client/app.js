var express = require('express');
var app = express();
var path = require('path');
var port = process.env.port || 3000

//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root

app.listen(port);
console.log('Listening on port 3000');