
var restify = require('restify');

var server = restify.createServer();
server.get('hi', respond);
server.get('hi/:index', respond);
server.use(restify.CORS({'origins': ['http://127.0.0.1:8080']}));

server.get(/.*/, restify.serveStatic({
'directory': 'restifyCommunication',
'default': 'restifyCommunication.html'
}));

function respond(req, res, next) {
  console.log("Got HTTP " + req.method + " on " + req.url + " responding");
  var hello = [{
    'id':'0',
    'hello': 'world'
  },{
    'id':'1',
    'say':'what'
  }];
  if(req.params.index){
    var found = hello[req.params.index];
    if(found){
      res.send(found);
    } else {
      res.status(404);
      res.send();
    }
  };
  res.send(hello);
  addHeaders(req,res);
  return next();
}

function addHeaders(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");    
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
 
 };

 server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});