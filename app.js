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
var naverkey = 'de5ca00aaa40ab254ea5dec2c93247fd';
var sQuery = 'node';
var nDisplay = 20;
var nStart = 1;

var http = require('http');
http.createServer(function (req, res) {
	/*if (req.method == 'OPTIONS') {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');		
	}
	else {
		res.setHeader('Access-Control-Allow-Origin', '*');		
	}*/	
  res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin' : '*'});
  //res.end('Hello World\n');
  console.log('start');
 
  var url = 'http://openapi.naver.com/search?key='+naverkey+'&query='+sQuery+'&display='+nDisplay+'&start='+nStart+'&target=book';
  console.log(url);
  http.get( url, function(innerRes){
  	var chunkdata = '';
  	innerRes.on('data', function(chunk){
  		console.log(chunk.length);
	  	chunkdata += chunk
	}).on('end', function(){
	  	res.end(chunkdata);
	});
  }).on('error', function(e){
  	console.log('error : ' + e.message);
  })
}).listen(2046, 'mybookmanagerserver.iamdenny.com');
console.log('Server running at http://mybookmanagerserver.iamdenny.com:2046');
