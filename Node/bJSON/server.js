// Import express into node
var express = require('express');

// Instantiate express
var app = express();

// When a HTTP get is performed on /greetings url
// The server return a JSON message
app.get('/greetings',function(req, res){
   res.json({message: 'Hello World!'});
});

// Bootstrap the server and tell him to listen on port 3000
var server = app.listen(3000, function(){
   console.log('servertenning on port %d', server.address().port);	
});