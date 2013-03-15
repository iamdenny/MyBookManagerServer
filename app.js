/*
var io = require('socket.io').listen(2046);

io.set('origins', '*:*')
  .set('transports', [
  	'websocket'
  	, 'flashsocket'
  	, 'xhr-polling'
  	, 'htmlfile'
  	, 'jsonp-polling'
  ]);
  
  
  
var Login = io
	.of('/login')
	.on('connection', function(socket){
		console.log('/login connection');
	});


var Book = io
	.of('/book')
	.on('connection', function(socket){
		console.log('/book connection');
	});

*/

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(2016, 'mybookmanagerserver.iamdenny.com');
console.log('Server running at http://mybookmanagerserver.iamdenny.com:2046');
