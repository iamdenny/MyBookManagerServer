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
